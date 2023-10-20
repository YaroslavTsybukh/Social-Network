import { Avatar, Button, Card, Menu, Space, Layout, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { sidebarItems } from './sidebarItems.tsx'
import { ROUTES } from '../../routes'

import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.ts'

export const LeftSidebar = () => {
    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
        }
    })
    const handleExit = async () => {
        try {
            await signOut(auth)
            Cookies.remove('accessToken')
            navigate(ROUTES.LOGIN, { replace: true })
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message)
            } else if (typeof e == 'string') {
                console.log(e)
            }
        }
    }

    return (
        <Layout.Sider
            theme='light'
            width={300}
            style={{
                maxHeight: 'calc(100vh - 88px)',
                position: 'sticky',
                left: 0,
                top: '88px',
                bottom: 0,
                padding: '20px 20px 0 0',
                marginTop: 24,
            }}
        >
            <Card title='Добро пожаловать' bordered={false} style={{ width: '100%', marginBottom: '30px' }}>
                <Space>
                    <Avatar
                        shape='square'
                        style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                        size='large'
                        gap={4}
                    >
                        User
                    </Avatar>
                    <Typography.Text italic>User name</Typography.Text>
                    <Button size='small' style={{ margin: '0 16px', verticalAlign: 'middle' }} onClick={handleExit}>
                        Выйти
                    </Button>
                </Space>
            </Card>
            <nav>
                <Menu theme='light' mode='inline' defaultSelectedKeys={['4']} items={sidebarItems} />
            </nav>
        </Layout.Sider>
    )
}
