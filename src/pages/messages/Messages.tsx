import { Layout } from '../../layout/Layout.tsx'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { AvatarWithStatus } from '../../components/ui/AvatarWithStatus.tsx'
import { useNavigate } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'

export const Messages = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/message/1')
    }

    return (
        <Layout>
            {/*<Card*/}
            {/*    style={{ width: '100%', marginBottom: '10px', background: '#e2e2e2', cursor: 'pointer' }}*/}
            {/*    bodyStyle={{ textAlign: 'left' }}*/}
            {/*    onClick={handleClick}*/}
            {/*>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card*/}
            {/*    style={{ width: '100%', marginBottom: '10px', background: '#e2e2e2', cursor: 'pointer' }}*/}
            {/*    bodyStyle={{ textAlign: 'left' }}*/}
            {/*>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }} bodyStyle={{ textAlign: 'left' }}>*/}
            {/*    <Meta*/}
            {/*        avatar={<AvatarWithStatus />}*/}
            {/*        title={*/}
            {/*            <div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*                <p>Ярослав Цыбух</p>*/}
            {/*                <p>22:51</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        description='Test message'*/}
            {/*        style={{ alignItems: 'center' }}*/}
            {/*    />*/}
            {/*</Card>*/}
            <ChatList
                lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                dataSource={[
                    {
                        id: 1,
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 4,
                        showMute: true,
                        muted: true,
                    },
                    {
                        id: 2,
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                    },
                    {
                        id: 3,
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                    },
                ]}
                id={1}
            />
        </Layout>
    )
}
