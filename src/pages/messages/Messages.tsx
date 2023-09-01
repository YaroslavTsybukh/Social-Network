import { Layout } from '../../layout/Layout.tsx'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { AvatarWithStatus } from '../../components/ui/AvatarWithStatus.tsx'

export const Messages = () => {
    return (
        <Layout>
            <Card
                style={{ width: '100%', marginBottom: '10px', background: '#e2e2e2', cursor: 'pointer' }}
                bodyStyle={{ textAlign: 'left' }}
            >
                <Meta
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
                    avatar={<AvatarWithStatus />}
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
