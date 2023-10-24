import { FC } from 'react'
import { Avatar, Card, Divider, Typography } from 'antd'
import { LikeOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons'

import Meta from 'antd/es/card/Meta'
import { MediaContent } from './MediaContent.tsx'
import { IPostField } from '../../core/shared/postField.interface.ts'

import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

interface IProps {
    postInfo: IPostField
}

export const Post: FC<IProps> = ({ postInfo }) => {
    const { description, urls, timestamp } = postInfo

    return (
        <>
            <Card
                style={{ width: '100%', marginBottom: '30px' }}
                bodyStyle={{ textAlign: 'left' }}
                actions={[
                    <>
                        <LikeOutlined key='like' />
                        <p>1</p>
                    </>,
                    <>
                        <MessageOutlined key='comment' />
                        <p>1</p>
                    </>,
                    <RetweetOutlined key='share' />,
                ]}
            >
                <Meta
                    avatar={
                        <Avatar
                            shape='square'
                            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                            size='large'
                            gap={4}
                        >
                            User
                        </Avatar>
                    }
                    title='Ярослав Цыбух'
                    description={
                        timestamp && (
                            <Typography.Text type='secondary'>
                                {dayjs.unix(timestamp.seconds).fromNow()}
                            </Typography.Text>
                        )
                    }
                />
                <Divider />

                {description && urls.length == 0 ? (
                    <Typography.Paragraph>{description}</Typography.Paragraph>
                ) : (
                    <>
                        <MediaContent urls={urls} />
                        <Typography.Paragraph style={{ marginTop: '20px' }}>{description}</Typography.Paragraph>
                    </>
                )}
            </Card>
        </>
    )
}
