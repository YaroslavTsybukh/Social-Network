import { ChangeEvent, useState, useEffect, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore'

import { useDebounce } from '../../core/hooks/useDebounce.ts'
import { Layout } from '../../layout/Layout.tsx'
import { db } from '../../firebase.ts'

interface ISearchUser {
    country: string
    displayName: string
    email: string
    gender: string
    phone: string
    uid: string
}

export const Messages: FC = () => {
    const [search, setSearch] = useState<string>('')
    const [searchUser, setSearchUser] = useState<DocumentData | null>(null)
    const [users, setUsers] = useState<ISearchUser[] | null>(null)
    const debouncedSearch = useDebounce(search)
    const navigate = useNavigate()

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            const usersArray: ISearchUser[] = []
            querySnapshot.forEach((doc) => {
                usersArray.push(doc.data() as ISearchUser)
            })
            setUsers(usersArray)
        }

        getUsers()
    }, [])

    useEffect(() => {
        const searchUserChat = async () => {
            const q = query(collection(db, 'users'), where('displayName', '==', debouncedSearch))
            const querySnapshot = await getDocs(q)

            if (querySnapshot.size > 0) {
                querySnapshot.forEach((snapShot) => {
                    setSearchUser(snapShot.data())
                })
            } else {
                setSearchUser(null)
            }
        }

        searchUserChat()
    }, [debouncedSearch])

    const handleClick = () => {
        navigate('/message/1')
    }

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <Layout>
            <Input
                placeholder='default size'
                style={{ marginBottom: 20 }}
                prefix={<UserOutlined />}
                allowClear={true}
                onChange={handleChange}
            />
            <ChatList
                lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                onClick={handleClick}
                dataSource={
                    searchUser
                        ? [
                              {
                                  id: 1,
                                  avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                  alt: 'kursat_avatar',
                                  title: searchUser?.displayName,
                                  subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                  date: new Date(),
                                  unread: 4,
                                  showMute: true,
                                  muted: true,
                              },
                          ]
                        : !searchUser && users
                        ? users.map((user) => ({
                              id: user?.uid,
                              avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                              alt: 'kursat_avatar',
                              title: user?.displayName,
                              subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                              date: new Date(),
                              unread: 4,
                              showMute: true,
                              muted: true,
                          }))
                        : []
                }
                id={1}
            />
        </Layout>
    )
}
