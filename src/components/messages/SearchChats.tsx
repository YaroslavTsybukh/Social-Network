import { FC, useEffect, useState, memo } from 'react'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Unsubscribe } from 'firebase/firestore'

import { CreateChat } from './CreateChat.tsx'
import { useDebounce } from '../../core/hooks/useDebounce.ts'

import { IChatInfo, IUserChatsFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { useChatService } from '../../core/services/chat.service.ts'
import { auth } from '../../firebase.ts'

interface IProps {
    setSearchChats: (value: IChatInfo[] | [] | null) => void
}

export const SearchChats: FC<IProps> = memo(({ setSearchChats }) => {
    const [search, setSearch] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search)
    const { getUserChats: getSearchedChats } = useChatService()

    useEffect(() => {
        if (auth.currentUser === null) return

        let unsub: Unsubscribe

        getSearchedChats(auth.currentUser)
            .then((res) => {
                const { unsub: unSub, data } = res as IUserChatsFromServer

                if (debouncedSearch) {
                    const userInfo = Object.values(data).filter((data) => data.userInfo.displayName === debouncedSearch)
                    setSearchChats(userInfo)
                } else {
                    setSearchChats(null)
                }

                unsub = unSub
            })
            .catch((res) => console.log(res))

        return () => {
            if (unsub) unsub()
        }
    }, [debouncedSearch, setSearchChats, getSearchedChats])

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
