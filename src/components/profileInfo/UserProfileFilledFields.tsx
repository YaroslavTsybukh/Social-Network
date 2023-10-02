import { FC, ReactNode } from 'react'
import { PlusCircleTwoTone } from '@ant-design/icons'
import { Typography } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

export const UserProfileFilledFields: FC<{ data: string | Date; icon: ReactNode; text: string }> = ({
    data,
    icon,
    text,
}) => {
    return (
        <Typography.Paragraph style={{ marginBottom: 0 }}>
            {icon}

            <Typography.Text strong style={{ marginRight: 10 }}>
                {text}
            </Typography.Text>

            {typeof data == 'object' && data ? (
                dayjs.unix(data!.seconds).format('DD MMM YYYY')
            ) : typeof data !== 'object' && data ? (
                data
            ) : (
                <PlusCircleTwoTone />
            )}
        </Typography.Paragraph>
    )
}
