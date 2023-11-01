import { useEffect, useState } from 'react'
import { Avatar, Button, Card, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

import { Layout } from '../../layout/Layout.tsx'
import { ISearchUser } from '../../core/shared/searchUser.interface.ts'

import { db } from '../../firebase.ts'

export const AllUsers = () => {
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
        })

        return () => unsub()
    }, [searchParams])

    return (
        <Layout>
            <section>
                <Card title='Люди' style={{ width: 700, margin: '0 auto' }} bodyStyle={{ paddingTop: 0 }}>
                    {searchUsers ? (
                        searchUsers.map((user) => (
                            <Card
                                key={user.uid}
                                type='inner'
                                title={user.displayName}
                                hoverable={true}
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
                        ))
                    ) : (
                        <Spin size='large' />
                    )}
                </Card>
            </section>
        </Layout>
    )
}
