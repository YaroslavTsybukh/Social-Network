import { MenuProps } from 'antd'
import { HomeOutlined, MailOutlined, NotificationOutlined, SaveOutlined, SmileOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const sidebarItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: <Link to='/profile'>Мой профиль</Link>,
    },
    {
        key: 'friends',
        icon: <SmileOutlined />,
        label: <Link to='/friends'>Мои друзья</Link>,
    },
    {
        key: 'message',
        icon: <MailOutlined />,
        label: <Link to='/messages'>Мои сообщения</Link>,
    },
    {
        key: 'news',
        icon: <NotificationOutlined />,
        label: <Link to='/'>Новости</Link>,
    },
    {
        key: 'saved',
        icon: <SaveOutlined />,
        label: 'Сохраненное',
    },
]
