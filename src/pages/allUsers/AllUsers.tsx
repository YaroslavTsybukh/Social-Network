import { useEffect, useState } from 'react'
import { Avatar, Button, Card, Empty, Spin } from 'antd'
import { CheckOutlined, PlusOutlined } from '@ant-design/icons'
import { useSearchParams, Link } from 'react-router-dom'
import { collection, doc, onSnapshot, query, updateDoc, arrayUnion, where, DocumentData } from 'firebase/firestore'

import { Layout } from '../../layout/Layout.tsx'
import { IUser } from '../../core/shared/searchUser.interface.ts'
import { ROUTES } from '../../routes'

import { db, auth } from '../../firebase.ts'

export const AllUsers = () => {
    const [process, setProcess] = useState<string>('loading')
    const [searchParams] = useSearchParams()
    const [searchUsers, setSearchUsers] = useState<IUser[] | null>(null)
    const [currentUser, setCurrentUser] = useState<DocumentData | null>(null)

    useEffect(() => {
        if (auth.currentUser !== null) {
            const allMatchingUsers: IUser[] = []

            const q = query(
                collection(db, 'users'),
                where('displayName', '==', searchParams.get('q')),
                where('displayName', '!=', auth.currentUser.displayName),
            )
            const unsubSearchedUser = onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((item) => {
                    allMatchingUsers.push(item.data() as IUser)
                })
            })

            const unsubUserFriends = onSnapshot(
                doc(db, 'userFriends', auth.currentUser!.uid),
                (doc) => {
                    if (doc.data()!.friends.length > 0) {
                        const transformedObject = allMatchingUsers.map((user) => ({
                            ...user,
                            isFriend: doc.data()!.friends.some((friend: IUser) => friend.uid == user.uid),
                        }))
                        setSearchUsers(transformedObject)
                    } else {
                        setSearchUsers(allMatchingUsers)
                    }
                    setProcess('confirmed')
                },
                (error) => console.log(error),
            )

            const unsubCurrentUser = onSnapshot(
                doc(db, 'users', auth.currentUser.uid),
                (doc) => {
                    setCurrentUser(doc.data() as DocumentData)
                },
                (error) => {
                    console.log(error.message)
                },
            )

            return () => {
                unsubSearchedUser()
                unsubUserFriends()
                unsubCurrentUser()
            }
        }
    }, [searchParams])

    const handleAddingFriend = async (user: IUser) => {
        if (auth.currentUser && currentUser) {
            await updateDoc(doc(db, 'userFriends', auth.currentUser.uid), {
                friends: arrayUnion({ ...user, isFriend: true }),
            })

            await updateDoc(doc(db, 'userFriends', user.uid), {
                friends: arrayUnion({ ...currentUser, isFriend: true }),
            })
        }
    }

    return (
        <Layout>
            <section>
                <Card title='Люди' style={{ width: 700, margin: '0 auto' }} bodyStyle={{ paddingTop: 0 }}>
                    {process == 'loading' && <Spin size='large' />}
                    {process == 'confirmed' &&
                        searchUsers &&
                        searchUsers.length > 0 &&
                        searchUsers.map((user) => (
                            <Card
                                key={user.uid}
                                type='inner'
                                title={<Link to={`${ROUTES.USER}/${user.uid}`}>{user.displayName}</Link>}
                                style={{ marginTop: 30 }}
                                extra={
                                    user.isFriend ? (
                                        <Button icon={<CheckOutlined />} type='dashed' ghost disabled>
                                            Уже в друзьях
                                        </Button>
                                    ) : (
                                        <Button
                                            type='primary'
                                            icon={<PlusOutlined />}
                                            onClick={() => handleAddingFriend(user)}
                                        >
                                            Добавить в друзья
                                        </Button>
                                    )
                                }
                            >
                                <Card.Meta
                                    avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />}
                                    description={user.country}
                                />
                            </Card>
                        ))}
                    {process == 'confirmed' && searchUsers && searchUsers.length == 0 && (
                        <Empty style={{ marginTop: 30 }} description='Такого пользователя нет :(' />
                    )}
                </Card>
            </section>
        </Layout>
    )
}
