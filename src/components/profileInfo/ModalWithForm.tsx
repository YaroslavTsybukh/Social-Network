import { FC, useEffect, useState } from 'react'
import { Button, Form, Modal } from 'antd'
import dayjs from 'dayjs'
import { SaveOutlined } from '@ant-design/icons'
import {
    aboutYourselfInfo,
    basicInfo,
    dwellingInfo,
    familyInfo,
    generalInfo,
    workAndEducationInfo,
} from './dataForModalFields.ts'
import { FormField } from './FormField.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserProfileField } from '../../core/shared/userProfileField.interface.ts'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.ts'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export const ModalWithForm: FC<{ formName: string; setCloseModal: () => void; isOpenModal: boolean }> = ({
    formName,
    setCloseModal,
    isOpenModal,
}) => {
    let formFields
    const { handleSubmit, control, reset, formState } = useForm<IUserProfileField>()
    const [dateString, setDateString] = useState<string | null>(null)

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState.isSubmitSuccessful, reset])

    const onSubmit: SubmitHandler<IUserProfileField> = async (data) => {
        if (dateString) {
            const transformData = {
                ...data,
                date: new Date(dayjs(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD')),
            }
            await setDoc(doc(db, 'userData', 'userInformation'), transformData, { merge: true })
        } else {
            await setDoc(doc(db, 'userData', 'userInformation'), data, { merge: true })
        }

        setDateString(null)
        setCloseModal()
    }

    switch (formName) {
        case 'generalInformation':
            formFields = (
                <>
                    {generalInfo.map((input, idx) => (
                        <FormField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'jobAndEducation':
            formFields = (
                <>
                    {workAndEducationInfo.map((input, idx) => (
                        <FormField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'dwelling':
            formFields = (
                <>
                    {dwellingInfo.map((input, idx) => (
                        <FormField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'basicInformation':
            formFields = (
                <>
                    {basicInfo.map((input, idx) => (
                        <FormField
                            key={idx}
                            info={input}
                            control={control}
                            dateString={dateString}
                            setDateString={(date) => setDateString(date)}
                        />
                    ))}
                </>
            )
            break
        case 'family':
            formFields = (
                <>
                    {familyInfo.map((input, idx) => (
                        <FormField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        case 'infoAboutYourself':
            formFields = (
                <>
                    {aboutYourselfInfo.map((input, idx) => (
                        <FormField key={idx} info={input} control={control} />
                    ))}
                </>
            )
            break
        default:
            formFields = null
            break
    }

    return (
        <Modal
            title='Общие сведения'
            open={isOpenModal}
            footer={null}
            onCancel={setCloseModal}
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
    )
}
