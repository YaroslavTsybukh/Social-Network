import { Avatar, Button, Card, Menu, Space, Layout, Typography } from 'antd'
import { sidebarItems } from './sidebarItems.tsx'
export const LeftSidebar = () => {
    const handleExit = () => {
        console.log('exit')
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