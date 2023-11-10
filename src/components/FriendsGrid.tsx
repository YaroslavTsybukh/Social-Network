import { useEffect, useState } from 'react'
import { Badge, Card, Col, Empty, Row } from 'antd'
import { Link } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'

import { ROUTES } from '../routes'
import { db } from '../firebase.ts'
import { useAuth } from '../core/hooks/useAuth.ts'
import { IUser } from '../core/shared/searchUser.interface.ts'

export const FriendsGrid = () => {
    const [friends, setFriends] = useState<IUser[] | null>(null)
    const currentUser = useAuth()

    useEffect(() => {
        if (currentUser) {
            const unsubUserFriends = onSnapshot(
                doc(db, 'userFriends', currentUser.uid),
                (doc) => {
                    setFriends(doc.data()?.friends as IUser[])
                },
                (error) => console.log(error),
            )

            return () => unsubUserFriends()
        }
    }, [currentUser])

    return (
        <div>
            {friends && friends.length > 0 && (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                    {friends.map((friend) => (
                        <Col className='gutter-row' span={6}>
                            <Badge.Ribbon text='Online' color='green'>
                                <Link to={`${ROUTES.USER}/1`}>
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt='example'
                                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                            />
                                        }
                                    >
                                        <Card.Meta title={friend.displayName} description={friend.country} />
                                    </Card>
                                </Link>
                            </Badge.Ribbon>
                        </Col>
                    ))}
                </Row>
            )}
            {friends && friends.length == 0 && <Empty description='Нет друзей :(' />}
        </div>
    )
}
