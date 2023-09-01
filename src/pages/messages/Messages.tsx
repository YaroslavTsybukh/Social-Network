import { Layout } from '../../layout/Layout.tsx'
import { Avatar, Badge, Card } from 'antd'
import Meta from 'antd/es/card/Meta'

export const Messages = () => {
    return (
        <Layout>
            <Card
                style={{ width: '100%', marginBottom: '10px', background: '#e2e2e2', cursor: 'pointer' }}
                bodyStyle={{ textAlign: 'left' }}
            >
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>
                <Meta
                    avatar={
                        <Badge dot={false} color='green'>
                            <Avatar
                                shape='square'
                                style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                                size='large'
                                gap={4}
                            >
                                User
                            </Avatar>
                        </Badge>
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card
                style={{ width: '100%', marginBottom: '10px', background: '#e2e2e2', cursor: 'pointer' }}
                bodyStyle={{ textAlign: 'left' }}
            >
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
            <Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>
                <Meta
                    avatar={
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
                    }
                    title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Ярослав Цыбух</p>
                            <p>22:51</p>
                        </div>
                    }
                    description='Test message'
                    style={{ alignItems: 'center' }}
                />
            </Card>
        </Layout>
    )
}
