import { MenuProps } from 'antd'
import { HomeOutlined, MailOutlined, NotificationOutlined, SaveOutlined, SmileOutlined } from '@ant-design/icons'

export const sidebarItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: 'Мой профиль',
    },
    {
        key: 'friends',
        icon: <SmileOutlined />,
        label: 'Мои друзья',
    },
    {
        key: 'message',
        icon: <MailOutlined />,
        label: 'Мои сообщения',
    },
    {
        key: 'news',
        icon: <NotificationOutlined />,
        label: 'Новости',
    },
    {
        key: 'saved',
        icon: <SaveOutlined />,
        label: 'Сохраненное',
    },
]
