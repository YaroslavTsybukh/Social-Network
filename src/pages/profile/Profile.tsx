import { FC } from 'react'
import { Layout } from '../../layout/Layout.tsx'
import { Button, Card, Divider, Image, Space, Tabs } from 'antd'
import { EditOutlined, MessageOutlined, UserAddOutlined } from '@ant-design/icons'
import { mainTabs } from './mainTabs.tsx'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useParams } from 'react-router-dom'
dayjs.extend(customParseFormat)

export const Profile: FC = () => {
    const params = useParams()

    const onChange = (key: string) => {
        console.log(key)
    }

    return (
        <Layout>
            <Card style={{ maxWidth: 900, width: '100%', margin: '0 auto' }}>
                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                    {params.friendId ? (
                        <>
                            <Card.Meta
                                avatar={
                                    <Image
                                        width={150}
                                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                                        alt='User Avatar'
                                        style={{ borderRadius: '50%' }}
                                    />
                                }
                                title='User Name'
                                description='Общие друзья: 2'
                                style={{ alignItems: 'center' }}
                            />
                            <Space>
                                <Button type='dashed' icon={<UserAddOutlined />}>
                                    Друзья
                                </Button>
                                <Button type='primary' icon={<MessageOutlined />}>
                                    Сообщения
                                </Button>
                            </Space>
                        </>
                    ) : (
                        <>
                            <Card.Meta
                                avatar={
                                    <Image
                                        width={150}
                                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                                        alt='User Avatar'
                                        style={{ borderRadius: '50%' }}
                                    />
                                }
                                title='User Name'
                                description='Друзья: 100'
                                style={{ alignItems: 'center' }}
                            />
                            <Button type='primary' icon={<EditOutlined />}>
                                Редактировать профиль
                            </Button>
                        </>
                    )}
                </Space>
                <Divider />
                <Tabs defaultActiveKey='1' items={mainTabs} onChange={onChange} />
            </Card>
        </Layout>
    )
}
