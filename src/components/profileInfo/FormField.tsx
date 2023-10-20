import { FC } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Form, Input, DatePicker } from 'antd'
import { Control, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { IUserProfileField } from '../../core/shared/userProfileField.interface.ts'

interface IUserProfileProps {
    info: { label: string; name: string; type: string }
    control: Control<IUserProfileField>
    dateString?: string | null
    setDateString?: (value: string) => void
}

type FieldNames = keyof IUserProfileField

export const FormField: FC<IUserProfileProps> = ({ info, control, setDateString, dateString }) => {
    return (
        <Form.Item
            label={info.label}
            name={info.name as FieldNames}
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
        >
            <Controller
                name={info.name as FieldNames}
                control={control}
                render={({ field }) =>
                    info.type !== 'date' ? (
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
