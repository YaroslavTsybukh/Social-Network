import { FC } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Form, Input, DatePicker } from 'antd'
import { Control, Controller, FieldValues } from 'react-hook-form'
import dayjs from 'dayjs'
interface IUserProfileProps {
    info: { label: string; name: string; type: string | null }
    control: Control<FieldValues, any>
    dateString?: string | null
    setDateString?: (value: string) => void
}

export const UserProfileField: FC<IUserProfileProps> = ({ info, control, setDateString, dateString }) => {
    return (
        <Form.Item label={info.label} tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}>
            <Controller
                name={info.name}
                control={control}
                render={({ field }) =>
                    info.type ? (
                        <Input {...field} type={info.type} />
                    ) : (
                        <DatePicker
                            {...field}
                            format={'DD/MM/YYYY'}
                            onChange={(_, dateString) => setDateString && setDateString(dateString)}
                            value={dateString ? dayjs(dateString, 'DD/MM/YYYY') : null}
                        />
                    )
                }
            />
        </Form.Item>
    )
}
