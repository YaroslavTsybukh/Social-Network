import { FC, useEffect, useState, memo } from 'react'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Unsubscribe } from 'firebase/firestore'

import { CreateChat } from './CreateChat.tsx'
import { useDebounce } from '../../core/hooks/useDebounce.ts'

import { useUserService } from '../../core/services/user.service.ts'
import { IDataFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { IUser } from '../../core/shared/user.interface.ts'

interface IProps {
    setSearchUser: (value: IUser[] | [] | null) => void
}

export const SearchChats: FC<IProps> = memo(({ setSearchUser }) => {
    const [search, setSearch] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search)
    const { getSearchedUsers: getSearchedChats } = useUserService()

    useEffect(() => {
        let unsub: Unsubscribe

        getSearchedChats(debouncedSearch)
            .then((res) => {
                if (typeof res == 'object' && res) {
                    const { unsub: unSub, data } = res as IDataFromServer
                    setSearchUser(data)
                    unsub = unSub
                } else if (res === null) {
                    setSearchUser(null)
                } else {
                    console.log('Incorrect type...')
                }
            })
            .catch((res) => console.log(res))

        return () => {
            if (unsub) unsub()
        }
    }, [debouncedSearch, setSearchUser, getSearchedChats])

    const showModal = () => {
        setIsModalOpen(true)
    }

    return (
        <section>
            <Space.Compact style={{ width: '100%' }}>
                <Input
                    placeholder='default size'
                    style={{ marginBottom: 20 }}
                    prefix={<UserOutlined />}
                    allowClear={true}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button type='primary' icon={<PlusOutlined />} onClick={showModal}>
                    Добавить чат
                </Button>
                {isModalOpen && <CreateChat isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
            </Space.Compact>
        </section>
    )
})
