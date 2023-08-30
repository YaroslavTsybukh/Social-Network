import React, { useState } from 'react'
import {
    HomeOutlined,
    MessageOutlined,
    BulbOutlined,
    TrademarkCircleTwoTone,
    SaveOutlined,
    BulbTwoTone,
    SaveTwoTone,
    HomeTwoTone,
    MessageTwoTone,
} from '@ant-design/icons'
import { Layout as LayoutAnt, Menu, Input, theme, Space, Card, Avatar, Button, Typography, MenuProps } from 'antd'

const { Text } = Typography
const { Search } = Input
const { Header, Content, Sider } = LayoutAnt

const menuItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeTwoTone style={{ fontSize: '28px' }} />,
        title: '',
    },
    {
        key: 'message',
        icon: <MessageTwoTone style={{ fontSize: '28px' }} />,
    },
    {
        key: 'news',
        icon: <BulbTwoTone style={{ fontSize: '28px' }} />,
    },
    {
        key: 'saved',
        icon: <SaveTwoTone style={{ fontSize: '28px' }} />,
    },
]

const sidebarItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: 'Моя страница',
    },
    {
        key: 'message',
        icon: <MessageOutlined />,
        label: 'Мои сообщения',
    },
    {
        key: 'news',
        icon: <BulbOutlined />,
        label: 'Новости',
    },
    {
        key: 'saved',
        icon: <SaveOutlined />,
        label: 'Новости',
    },
]

interface IProps {
    children: string
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const onSearch = (value: string) => console.log(value)
    const handleExit = () => {
        console.log('exit')
    }

    const [current, setCurrent] = useState('home')

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <LayoutAnt>
            <Header
                style={{
                    padding: '10px 16px 10px 28px',
                    background: colorBgContainer,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <TrademarkCircleTwoTone style={{ fontSize: '45px' }} />
                <nav>
                    <Menu
                        mode='horizontal'
                        selectedKeys={[current]}
                        onClick={onClick}
                        className='menu'
                        items={menuItems}
                    />
                </nav>
                <Search
                    placeholder='input search text'
                    onSearch={onSearch}
                    enterButton
                    size='middle'
                    style={{ width: '500px' }}
                />
            </Header>
            <LayoutAnt hasSider>
                <Sider
                    theme='light'
                    width={300}
                    style={{
                        maxHeight: 'calc(100vh - 88px)',
                        position: 'sticky',
                        left: 0,
                        top: '88px',
                        bottom: 0,
                        padding: '20px 20px 0 0',
                    }}
                >
                    <Card title='Добро пожаловать' bordered={false} style={{ width: '100%', marginBottom: '30px' }}>
                        <Space>
                            <Avatar
                                style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                                size='large'
                                gap={4}
                            >
                                User
                            </Avatar>
                            <Text italic>User name</Text>
                            <Button
                                size='small'
                                style={{ margin: '0 16px', verticalAlign: 'middle' }}
                                onClick={handleExit}
                            >
                                Выйти
                            </Button>
                        </Space>
                    </Card>
                    <nav>
                        <Menu theme='light' mode='inline' defaultSelectedKeys={['4']} items={sidebarItems} />
                    </nav>
                </Sider>
                <LayoutAnt style={{ marginLeft: 100 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                            <p>{children}</p>
                            {
                                // indicates very long content
                                Array.from({ length: 100 }, (_, index) => (
                                    <React.Fragment key={index}>
                                        {index % 20 === 0 && index ? 'more' : '...'}
                                        <br />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </Content>
                </LayoutAnt>
            </LayoutAnt>
        </LayoutAnt>
    )
}
