import { FC } from 'react'
import { IPostField } from '../../shared/postField.ts'
import { Avatar, Card, Divider, Typography } from 'antd'
import { LikeOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'
import { MediaContent } from './MediaContent.tsx'

interface IProps {
    postInfo: IPostField
}

export const Post: FC<IProps> = ({ postInfo }) => {
    const { description, urls } = postInfo

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
                    description='15 минут назад'
                />
                <Divider />

                {!description ? (
                    <MediaContent urls={urls} />
                ) : description && urls.length == 0 ? (
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
