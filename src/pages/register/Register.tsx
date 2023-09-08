import { FC } from 'react'
import { Layout } from '../../layout/Layout.tsx'
import { Button, Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

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

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    const prefixSelector = (
        <Form.Item name='prefix' noStyle>
            <Select style={{ width: 70 }}>
                <Select.Option value='380'>+380</Select.Option>
                <Select.Option value='49'>+49</Select.Option>
                <Select.Option value='48'>+48</Select.Option>
            </Select>
        </Form.Item>
    )

    return (
        <Layout>
            <section>
                <Form
                    {...formItemLayout}
                    form={form}
                    name='register'
                    onFinish={onFinish}
                    initialValues={{ prefix: '380' }}
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
                            <Select.Option value='male'>Мужчина</Select.Option>
                            <Select.Option value='female'>Женщина</Select.Option>
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
                            <Select.Option value='ukraine'>Украина</Select.Option>
                            <Select.Option value='germany'>Германия</Select.Option>
                            <Select.Option value='poland'>Польша</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name='phone'
                        label='Номер телефона'
                        rules={[{ required: true, message: 'Укажите свой номер телефона!' }]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{ width: '100%' }}
                            placeholder='Введите свой номер телефона'
                        />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        label='Пароль'
                        rules={[
                            {
                                required: true,
                                message: 'Укажите свой пароль!',
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
                                message: 'Подтвердите свой пароль!',
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
