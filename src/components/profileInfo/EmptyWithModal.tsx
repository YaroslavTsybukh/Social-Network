import { FC, useState } from 'react'
import dayjs from 'dayjs'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SaveOutlined } from '@ant-design/icons'
import { Button, Empty, Form, Modal } from 'antd'
import { IUserProfileField } from '../../shared/userProfileField.interface.ts'
import { UserProfileField } from './UserProfileField.tsx'
import {
    generalInfo,
    basicInfo,
    familyInfo,
    dwellingInfo,
    aboutYourselfInfo,
    workAndEducationInfo,
} from './dataForFields.ts'

interface IProps {
    formName: string
}

export const EmptyWithModal: FC<IProps> = ({ formName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { handleSubmit, control } = useForm<IUserProfileField>()

    let formFields

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const onSubmit: SubmitHandler<IUserProfileField> = (data) => {
        console.log(data)
    }

    switch (formName) {
        case 'generalInformation':
            formFields = (
                <>
                    {generalInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'jobAndEducation':
            formFields = (
                <>
                    {workAndEducationInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'dwelling':
            formFields = (
                <>
                    {dwellingInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'basicInformation':
            formFields = (
                <>
                    {basicInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'family':
            formFields = (
                <>
                    {familyInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'infoAboutYourself':
            formFields = (
                <>
                    {aboutYourselfInfo.map((input, idx) => (
                        <UserProfileField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        default:
            formFields = null
            break
    }

    return (
        <>
            <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{ height: 60 }}
                description={<span>Нужно добавить информацию</span>}
            >
                <Button type='primary' onClick={handleOpenModal}>
                    Добавить информацию
                </Button>
            </Empty>
            <Modal
                title='Общие сведения'
                open={isModalOpen}
                footer={null}
                onCancel={handleCloseModal}
                bodyStyle={{ marginTop: 30 }}
            >
                <Form
                    name={formName}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true, date: dayjs('01/01/2015', 'DD/MM/YYYY') }}
                    onFinish={handleSubmit(onSubmit)}
                    autoComplete='off'
                    layout='vertical'
                >
                    {formFields}

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
