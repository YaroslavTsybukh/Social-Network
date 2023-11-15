import { FC, useEffect, useState } from 'react'
import { Input, Modal, Table } from 'antd'

import { Unsubscribe } from 'firebase/firestore'

import { useUserService } from '../../core/services/user.service.ts'
import { IDataFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { IUser } from '../../core/shared/user.interface.ts'

interface IProps {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

export const CreateChat: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [search, setSearch] = useState<string>('')
    const [searchUser, setSearchUser] = useState<IUser[] | null>(null)

    const { getUsers, getSearchedUsers } = useUserService()

    useEffect(() => {
        let unsub: Unsubscribe

        if (search) {
            getSearchedUsers(search)
                .then((res) => {
                    if (typeof res == 'object' && res) {
                        const { unsub: unSub, data } = res as IDataFromServer
                        setSearchUser(data)
                        unsub = unSub
                    } else {
                        console.log('Incorrect type...')
                    }
                })
                .catch((res) => console.log(res))
        } else {
            getUsers()
                .then((res) => {
                    if (typeof res == 'object' && res) {
                        const { unsub: unSub, data } = res as IDataFromServer
                        setSearchUser(data)
                        unsub = unSub
                    } else {
                        console.log('Incorrect type...')
                    }
                })
                .catch((res) => console.log(res))
        }

        return () => {
            if (unsub) unsub()
        }
    }, [search, getUsers, getSearchedUsers])

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: IUser[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
    }

    const handleSearch = (value: string) => setSearch(value)

    return (
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
                        ...rowSelection,
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
    )
}
