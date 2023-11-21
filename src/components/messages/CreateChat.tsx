import { FC, useEffect, useState } from 'react'
import { Input, message, Modal, Table } from 'antd'

import { Unsubscribe } from 'firebase/firestore'

import { useUserService } from '../../core/services/user.service.ts'
import { IFriendsFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { IUser } from '../../core/shared/user.interface.ts'
import { auth } from '../../firebase.ts'
import { useChatService } from '../../core/services/chat.service.ts'

interface IProps {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

export const CreateChat: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [search, setSearch] = useState<string | null>(null)
    const [searchUser, setSearchUser] = useState<IUser[] | null>(null)
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

    const { getFriends } = useUserService()
    const { updateUserChat } = useChatService()

    useEffect(() => {
        if (auth.currentUser === null) return

        let unsub: Unsubscribe

        getFriends(auth.currentUser)
            .then((res) => {
                const { unsub: unSub, data } = res as IFriendsFromServer

                if (search) {
                    const searchedUsers = data.filter((user) => user.displayName === search)
                    setSearchUser(searchedUsers)
                } else {
                    setSearchUser(data)
                }

                unsub = unSub
            })
            .catch((res) => console.log(res))

        return () => {
            if (unsub) unsub()
        }
    }, [search, getFriends])

    const handleOk = () => {
        if (auth.currentUser !== null && selectedUser) {
            const combinedId = auth.currentUser.uid + selectedUser.uid

            Promise.all([
                updateUserChat(auth.currentUser, selectedUser, combinedId),
                updateUserChat(selectedUser, auth.currentUser, combinedId),
            ])
                .then(() => message.success('Чат создан!'))
                .catch(() => message.error('Упс, произошла ошибка'))
        }

        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleSearch = (value: string) => setSearch(value)

    return (
        <>
            <Modal
                title='Мои друзья'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText='Отмена'
                okText='Создать чат'
            >
                <Input.Search placeholder='Поиск...' onSearch={handleSearch} />
                {searchUser && (
                    <Table
                        rowSelection={{
                            type: 'radio',
                            onChange: (_, selectedRows: IUser[]) => {
                                const [user] = selectedRows
                                console.log(user)
                                setSelectedUser(user)
                            },
                        }}
                        showHeader={false}
                        columns={[
                            {
                                dataIndex: 'displayName',
                            },
                        ]}
                        dataSource={searchUser}
                        pagination={{ pageSize: 5 }}
                        rowKey={(record) => record.uid}
                    />
                )}
            </Modal>
        </>
    )
}
