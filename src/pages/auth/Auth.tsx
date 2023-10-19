import { Layout } from '../../layout/Layout.tsx'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
import Cookies from 'js-cookie'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.ts'

interface IAuthUser {
    email: string
    remember: boolean
    password: string
}

export const Auth = () => {
    const navigate = useNavigate()

    const onFinish = async (data: IAuthUser) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, data.email, data.password)
            const accessToken = await user.getIdToken()

            if (data.remember) {
                Cookies.set('accessToken', accessToken, {
                    expires: new Date(new Date().getTime() + 10 * 60 * 1000),
                })
            } else {
                Cookies.set('accessToken', accessToken)
            }

            navigate(ROUTES.HOME, { replace: true })
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message)
            } else if (typeof e == 'string') {
                console.log(e)
            }
        }
    }

    return (
        <Layout>
            <section>
                <Form
                    style={{ margin: '0 auto', maxWidth: 300, width: '100%' }}
                    name='normal_login'
                    className='login-form'
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                >
                    <Form.Item name='email' rules={[{ required: true, message: 'Введите свой email!' }]}>
                        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Email' />
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
                        Или <Link to={ROUTES.REGISTER}>зарегистрироваться сейчас!</Link>
                    </Form.Item>
                </Form>
            </section>
        </Layout>
    )
}
