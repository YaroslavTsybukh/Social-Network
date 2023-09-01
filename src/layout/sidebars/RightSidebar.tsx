import { Avatar, Badge, Card, Layout, Space, Typography } from 'antd'

export const RightSidebar = () => {
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
                padding: '20px 0 0 20px',
                marginTop: 24,
            }}
        >
            <Card
                title='Контакты'
                bordered={false}
                style={{ width: '100%', marginBottom: '30px' }}
                bodyStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
                <Space style={{ cursor: 'pointer' }}>
                    <Badge dot={true} color='green' offset={[-2, 38]} status='processing'>
                        <Avatar
                            shape='square'
                            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                            size='large'
                            gap={4}
                        >
                            User
                        </Avatar>
                    </Badge>
                    <Typography.Text italic>User name</Typography.Text>
                </Space>
                <Space style={{ cursor: 'pointer' }}>
                    <Badge dot={false}>
                        <Avatar
                            shape='square'
                            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                            size='large'
                            gap={4}
                        >
                            User
                        </Avatar>
                    </Badge>
                    <Typography.Text italic>User name</Typography.Text>
                </Space>
                <Space style={{ cursor: 'pointer' }}>
                    <Badge dot={true} color='green' offset={[-2, 38]} status='processing'>
                        <Avatar
                            shape='square'
                            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                            size='large'
                            gap={4}
                        >
                            User
                        </Avatar>
                    </Badge>
                    <Typography.Text italic>User name</Typography.Text>
                </Space>
            </Card>
        </Layout.Sider>
    )
}
