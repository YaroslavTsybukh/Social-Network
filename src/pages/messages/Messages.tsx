import { Layout } from '../../layout/Layout.tsx'
import { useNavigate } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Messages = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/message/1')
    }

    return (
        <Layout>
            <Input placeholder='default size' style={{ marginBottom: 20 }} prefix={<UserOutlined />} />
            <ChatList
                lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                onClick={handleClick}
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
