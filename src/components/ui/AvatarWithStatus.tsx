import { Avatar, Badge } from 'antd'

export const AvatarWithStatus = () => {
    return (
        <Badge dot={true} color='green' offset={[-2, 38]} status='processing'>
            <Avatar shape='square' style={{ backgroundColor: '#f56a00' }} size='large'>
                User
            </Avatar>
        </Badge>
    )
}
