import { FC, Key, useCallback, useEffect, useState } from 'react'
import { Button, Input, Modal, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { collection, DocumentData, getDocs, onSnapshot, query, where, Unsubscribe } from 'firebase/firestore'

import { IUser } from '../../core/shared/searchUser.interface.ts'
import { useUserService } from '../../core/services/user.service.ts'

import { db } from '../../firebase.ts'
import { searchedUsers } from '../../core/utils/searchedUsers.ts'

interface DataType extends IUser {
    key: Key
}

interface IDataFromServer {
    data: DataType[]
    unsub: Unsubscribe
}

interface IProps {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

//TODO: continue working on code optimization (creation of services)

export const CreateChat: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [search, setSearch] = useState<string>('')
    const [searchUser, setSearchUser] = useState<DataType[] | null>(null)
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
            if (unsub) {
                console.log('Unsub...')
                unsub()
            }
        }
    }, [search, getUsers, getSearchedUsers])

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
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
                />
            )}
        </Modal>
    )
}
