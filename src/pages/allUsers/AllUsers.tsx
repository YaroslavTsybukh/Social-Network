import { useEffect, useState } from 'react'
import { Avatar, Button, Card, Empty, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSearchParams, Link } from 'react-router-dom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

import { Layout } from '../../layout/Layout.tsx'
import { ISearchUser } from '../../core/shared/searchUser.interface.ts'

import { db } from '../../firebase.ts'

export const AllUsers = () => {
    const [process, setProcess] = useState<string>('loading')
    const [searchParams] = useSearchParams()
    const [searchUsers, setSearchUsers] = useState<ISearchUser[] | null>(null)

    useEffect(() => {
        const q = query(collection(db, 'users'), where('displayName', '==', searchParams.get('q')))
        const unsub = onSnapshot(q, (querySnapshot) => {
            const users: ISearchUser[] = []

            querySnapshot.forEach((item) => {
                users.push(item.data() as ISearchUser)
            })

            setSearchUsers(users)
            setProcess('confirmed')
        })

        return () => unsub()
    }, [searchParams])

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
                                title={<Link to={`/user/${user.uid}`}>{user.displayName}</Link>}
                                style={{ marginTop: 30 }}
                                extra={
                                    <Button type='primary' icon={<PlusOutlined />}>
                                        Добавить в друзья
                                    </Button>
                                }
                            >
                                <Card.Meta
                                    avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />}
                                    description={user.country}
                                />
                            </Card>
                        ))}
                    {process == 'confirmed ' && searchUsers && searchUsers.length == 0 && (
                        <Empty style={{ marginTop: 30 }} description='Такого пользователя нет :(' />
                    )}
                </Card>
            </section>
        </Layout>
    )
}
