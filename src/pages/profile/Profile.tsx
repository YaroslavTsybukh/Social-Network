import { FC, useState } from 'react'
import { Button, Card, Divider, Image, Input, Space, Tabs } from 'antd'
import { EditOutlined, MessageOutlined, UserAddOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'

import { Layout } from '../../layout/Layout.tsx'
import { AddPost, FriendsGrid, Posts, ProfileInfoWrapper } from '../../components'

export const Profile: FC = () => {
    const params = useParams()
    const [tabNumber, setTabNumber] = useState<string>('1')

    const onSearch = (value: string) => console.log(value)

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
                            <Button type='primary' icon={<EditOutlined />} onClick={() => setTabNumber('2')}>
                                Редактировать профиль
                            </Button>
                        </>
                    )}
                </Space>
                <Divider />
                <Tabs
                    activeKey={`${tabNumber}`}
                    items={[
                        {
                            key: '1',
                            label: 'Публикации',
                            children: (
                                <Card>
                                    <AddPost />
                                    <Posts />
                                </Card>
                            ),
                        },
                        {
                            key: '2',
                            label: 'Информация',
                            children: (
                                <Card>
                                    <Tabs
                                        tabPosition='left'
                                        items={[
                                            {
                                                key: 'generalInformation',
                                                label: 'Общий сведения',
                                                children: <ProfileInfoWrapper formName='generalInformation' />,
                                            },
                                            {
                                                key: 'jobAndEducation',
                                                label: 'Работа и образование',
                                                children: <ProfileInfoWrapper formName='jobAndEducation' />,
                                            },
                                            {
                                                key: 'dwelling',
                                                label: 'Места проживания',
                                                children: <ProfileInfoWrapper formName='dwelling' />,
                                            },
                                            {
                                                key: 'basicInformation',
                                                label: 'Контактная и основная информация',
                                                children: <ProfileInfoWrapper formName='basicInformation' />,
                                            },
                                            {
                                                key: 'family',
                                                label: 'Семья и отношения',
                                                children: <ProfileInfoWrapper formName='family' />,
                                            },
                                            {
                                                key: 'infoAboutYourself',
                                                label: 'Информация о вас',
                                                children: <ProfileInfoWrapper formName='infoAboutYourself' />,
                                            },
                                        ]}
                                    />
                                </Card>
                            ),
                        },
                        {
                            key: '3',
                            label: 'Друзья',
                            children: (
                                <Card>
                                    <Input.Search
                                        placeholder='Поиск по друзьям...'
                                        onSearch={onSearch}
                                        style={{ marginBottom: 50 }}
                                        enterButton
                                        size='middle'
                                    />
                                    <FriendsGrid />
                                </Card>
                            ),
                        },
                    ]}
                    onChange={(key) => setTabNumber(key)}
                />
            </Card>
        </Layout>
    )
}
