import { useState, useEffect, FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Empty, Spin } from 'antd'
import { ChatList, IChatItemProps } from 'react-chat-elements'
import { doc, setDoc, Unsubscribe } from 'firebase/firestore'

import { useAuth } from '../../core/hooks/useAuth.ts'
import { useChatService } from '../../core/services/chat.service.ts'
import { IChatInfo, IChatsInfo, IUserChatsFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { SearchChats } from '../../components'
import { Layout } from '../../layout/Layout.tsx'

import { db } from '../../firebase.ts'

export const Messages: FC = () => {
    const [searchChats, setSearchChats] = useState<IChatInfo[] | [] | null>(null)
    const [chats, setChats] = useState<IChatsInfo | null>(null)
    const { getUserChats } = useChatService()

    const navigate = useNavigate()
    const currentUser = useAuth()

    useEffect(() => {
        let unsub: Unsubscribe

        if (currentUser) {
            getUserChats(currentUser).then((res) => {
                const { unsub: unSub, data } = res as IUserChatsFromServer
                setChats(data)

                unsub = unSub
            })
        }

        return () => {
            if (unsub) unsub()
        }
    }, [currentUser, getUserChats])

    const handleClick = async (user: IChatItemProps) => {
        const { id } = user
        navigate(`/message/${id}`)

        if (currentUser) {
            const combinedId = currentUser.uid + id

            await setDoc(doc(db, 'chats', combinedId), { messages: [] })
        }
    }

    const handleSearchChats = useCallback((value: IChatInfo[] | [] | null) => {
        setSearchChats(value)
    }, [])

    return (
        <Layout>
            <SearchChats setSearchChats={handleSearchChats} />
            <section>
                {!searchChats && !chats && (
                    <div style={{ textAlign: 'center' }}>
                        <Spin />
                    </div>
                )}

                {!searchChats && chats && Object.entries(chats).length > 0 ? (
                    <ChatList
                        lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                        onClick={handleClick}
                        dataSource={Object.entries(chats).map((chat) => ({
                            id: chat[0],
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: chat[1].userInfo.displayName,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 4,
                            showMute: true,
                            muted: true,
                        }))}
                        id={1}
                    />
                ) : !searchChats && chats && Object.entries(chats).length == 0 ? (
                    <Empty description='Чаты не найдены :(' />
                ) : null}

                {searchChats && searchChats.length > 0 ? (
                    <ChatList
                        lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                        onClick={handleClick}
                        dataSource={searchChats.map((searchChat) => ({
                            id: searchChat.userInfo.uid,
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: searchChat.userInfo.displayName,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 4,
                            showMute: true,
                            muted: true,
                        }))}
                        id={1}
                    />
                ) : searchChats && searchChats.length === 0 ? (
                    <Empty description='Такого чата не существует' />
                ) : null}
            </section>
        </Layout>
    )
}
