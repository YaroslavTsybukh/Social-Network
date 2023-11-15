import { useState, useEffect, FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatList, IChatItemProps } from 'react-chat-elements'
import {
    collection,
    query,
    where,
    getDocs,
    DocumentData,
    updateDoc,
    doc,
    serverTimestamp,
    setDoc,
    Unsubscribe,
} from 'firebase/firestore'

import { useAuth } from '../../core/hooks/useAuth.ts'
import { useUserService } from '../../core/services/user.service.ts'
import { Layout } from '../../layout/Layout.tsx'
import { SearchChats } from '../../components'
import { IUser } from '../../core/shared/user.interface.ts'

import { db } from '../../firebase.ts'
import { IDataFromServer } from '../../core/shared/ResponseForChats.interface.ts'
import { Empty, Spin } from 'antd'
// TODO: work on code optimization and remove 4 useEffects

export const Messages: FC = () => {
    const [searchUsers, setSearchUsers] = useState<IUser[] | null>(null)
    const [users, setUsers] = useState<IUser[] | null>(null)
    const { getUsers } = useUserService()

    const navigate = useNavigate()
    const currentUser = useAuth()

    useEffect(() => {
        let unsub: Unsubscribe

        getUsers()
            .then((res) => {
                if (typeof res == 'object' && res) {
                    const { unsub: unSub, data } = res as IDataFromServer
                    setUsers(data)

                    unsub = unSub
                }
            })
            .catch((res) => console.log(res))

        return () => {
            if (unsub) unsub()
        }
    }, [getUsers])

    const handleClick = async (user: IChatItemProps) => {
        const { id, title } = user
        navigate(`/message/${id}`)

        if (currentUser) {
            const combinedId = currentUser.uid + id

            await setDoc(doc(db, 'chats', combinedId), { messages: [] })

            await updateDoc(doc(db, 'userChats', currentUser.uid), {
                [combinedId + '.userInfo']: {
                    uid: id,
                    displayName: title,
                },
                [combinedId + '.date']: serverTimestamp(),
            })

            await updateDoc(doc(db, 'userChats', String(id)), {
                [combinedId + '.userInfo']: {
                    uid: currentUser.uid,
                    displayName: currentUser.displayName,
                },
                [combinedId + '.date']: serverTimestamp(),
            })
        }
    }

    const handleSearchUser = useCallback((value: IUser[] | [] | null) => {
        setSearchUsers(value)
    }, [])

    console.log(searchUsers)
    console.log(users)
    return (
        <Layout>
            <SearchChats setSearchUser={handleSearchUser} />
            <section>
                {!searchUsers && !users && (
                    <div style={{ textAlign: 'center' }}>
                        <Spin />
                    </div>
                )}

                {!searchUsers && users && users.length > 0 ? (
                    <ChatList
                        lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                        onClick={handleClick}
                        dataSource={users.map((user) => ({
                            id: user.uid,
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: user.displayName,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 4,
                            showMute: true,
                            muted: true,
                        }))}
                        id={1}
                    />
                ) : !searchUsers && users && users.length == 0 ? (
                    <Empty description='Чаты не найдены :(' />
                ) : null}

                {searchUsers && searchUsers.length > 0 ? (
                    <ChatList
                        lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                        onClick={handleClick}
                        dataSource={searchUsers.map((searchUser) => ({
                            id: searchUser.uid,
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: searchUser.displayName,
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 4,
                            showMute: true,
                            muted: true,
                        }))}
                        id={1}
                    />
                ) : searchUsers && searchUsers.length === 0 ? (
                    <Empty description='Такого чата не существует' />
                ) : null}
            </section>
        </Layout>
    )
}
