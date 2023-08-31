import { Badge, MenuProps } from 'antd'
import { HomeTwoTone, MessageTwoTone, NotificationTwoTone, SaveTwoTone } from '@ant-design/icons'

export const menuItems: MenuProps['items'] = [
    {
        key: 'home',
        icon: <HomeTwoTone style={{ fontSize: '24px' }} />,
    },
    {
        key: 'message',
        icon: (
            <Badge count={5} size='small'>
                <MessageTwoTone style={{ fontSize: '24px' }} />
            </Badge>
        ),
    },
    {
        key: 'news',
        icon: (
            <Badge count={5} size='small'>
                <NotificationTwoTone style={{ fontSize: '24px' }} />
            </Badge>
        ),
    },
    {
        key: 'saved',
        icon: (
            <Badge count={5} size='small'>
                <SaveTwoTone style={{ fontSize: '24px' }} />
            </Badge>
        ),
    },
]
