import { FC } from 'react'
import { Layout } from '../../layout/Layout.tsx'
import { Button, Form, Input, Select } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { auth, db } from '../../firebase.ts'
import { doc, setDoc } from 'firebase/firestore'

interface IFormFields {
    confirm: string
    country: string
    email: string
    fullName: string
    gender: string
    password: string
    phone: string
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
}

export const Register: FC = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const onFinish = async (data: IFormFields) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, {
                displayName: data.fullName,
            })

            await setDoc(doc(db, 'users', user.uid), {
                displayName: data.fullName,
                gender: data.gender,
                phone: data.phone,
                email: data.email,
                country: data.country,
                uid: user.uid,
            })

            await setDoc(doc(db, 'userChats', user.uid), {})

            navigate(ROUTES.LOGIN, { replace: true })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            } else if (typeof error == 'string') {
                console.log(error)
            }
        }
    }

    return (
        <Layout>
            <section>
                <Form
                    {...formItemLayout}
                    form={form}
                    name='register'
                    onFinish={onFinish}
                    style={{ maxWidth: 600, margin: '0 auto' }}
                    scrollToFirstError
                >
                    <Form.Item
                        name='fullName'
                        label='Полное имя'
                        tooltip='Как вас зовут?'
                        rules={[{ required: true, message: 'Укажите своё имя!', whitespace: true }]}
                    >
                        <Input placeholder='Введите полное имя с фамилией' />
                    </Form.Item>

                    <Form.Item name='gender' label='Пол' rules={[{ required: true, message: 'Укажите свой пол' }]}>
                        <Select placeholder='Выберите пол'>
                            <Select.Option value='мужчина'>Мужчина</Select.Option>
                            <Select.Option value='женщина'>Женщина</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name='email'
                        label='E-mail'
                        rules={[
                            {
                                type: 'email',
                                message: 'Введен некорректный e-mail',
                            },
                            {
                                required: true,
                                message: 'Укажите свой e-mail!',
                            },
                        ]}
                    >
                        <Input placeholder='Заполните свой email' />
                    </Form.Item>

                    <Form.Item name='country' label='Страна'>
                        <Select placeholder='Выберите страну'>
                            <Select.Option value='украина'>Украина</Select.Option>
                            <Select.Option value='германия'>Германия</Select.Option>
                            <Select.Option value='польша'>Польша</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name='phone'
                        label='Номер телефона'
                        rules={[{ required: true, message: 'Укажите свой номер телефона!' }]}
                    >
                        <Input style={{ width: '100%' }} placeholder='Введите свой номер телефона' />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        label='Пароль'
                        rules={[
                            {
                                required: true,
                                message: 'Укажите корректный пароль! Он должен иметь минимум 6 символов !',
                                min: 6,
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder='Введите свой пароль' />
                    </Form.Item>

                    <Form.Item
                        name='confirm'
                        label='Подтверждение пароля'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Подтвердите свой пароль! Он должен иметь минимум 6 символов ! ',
                                min: 6,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('Пароли не совпадает'))
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder='Подтвердите свой пароль' />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                            Регистрация
                        </Button>
                        Или <Link to={ROUTES.LOGIN}>войти в систему сейчас!</Link>
                    </Form.Item>
                </Form>
            </section>
        </Layout>
    )
}
