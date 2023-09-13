import { Avatar, Card, Divider, Image, Typography } from 'antd'
import { LikeOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'
import { IPostField } from '../shared/IPostField.ts'
import { FC } from 'react'

interface IProps {
    postInfo: IPostField
}

export const Post: FC<IProps> = ({ postInfo }) => {
    const { images, description } = postInfo

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
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            width='50%'
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                            alt='Image in post'
                        />
                    </div>
                ) : !images ? (
                    <Typography.Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography.Paragraph>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                                width='50%'
                                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                                alt='Image in post'
                            />
                        </div>
                        <Typography.Paragraph style={{ marginTop: '20px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography.Paragraph>
                    </>
                )}
            </Card>
        </>
    )
}
