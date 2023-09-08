import { MenuProps } from 'antd'
import { HomeOutlined, MailOutlined, NotificationOutlined, SaveOutlined, SmileOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

export const sidebarItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: <Link to={ROUTES.PROFILE}>Мой профиль</Link>,
    },
    {
        key: 'friends',
        icon: <SmileOutlined />,
        label: <Link to={ROUTES.FRIENDS}>Мои друзья</Link>,
    },
    {
        key: 'message',
        icon: <MailOutlined />,
        label: <Link to={ROUTES.MESSAGES}>Мои сообщения</Link>,
    },
    {
        key: 'news',
        icon: <NotificationOutlined />,
        label: <Link to={ROUTES.HOME}>Новости</Link>,
    },
    {
        key: 'saved',
        icon: <SaveOutlined />,
        label: 'Сохраненное',
    },
]
