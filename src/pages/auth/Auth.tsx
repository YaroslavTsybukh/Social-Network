import { Layout } from '../../layout/Layout.tsx'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const Auth = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Layout>
            <section>
                <Form
                    style={{ margin: '0 auto', maxWidth: 300, width: '100%' }}
                    name='normal_login'
                    className='login-form'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item name='username' rules={[{ required: true, message: 'Введите свой логин!' }]}>
                        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Имя' />
                    </Form.Item>
                    <Form.Item name='password' rules={[{ required: true, message: 'Введите свой пароль!' }]}>
                        <Input
                            prefix={<LockOutlined className='site-form-item-icon' />}
                            type='password'
                            placeholder='Пароль'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>

                        <Link className='login-form-forgot' to=''>
                            Забыли пароль?
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{ width: '100%' }}
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Войти в систему
                        </Button>
                        Или <Link to='/register'>зарегистрироваться сейчас!</Link>
                    </Form.Item>
                </Form>
            </section>
        </Layout>
    )
}
