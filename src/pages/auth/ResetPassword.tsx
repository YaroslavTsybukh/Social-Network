import { Button, Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../routes'
import { Layout } from '../../layout/Layout.tsx'

import { auth } from '../../firebase.ts'
import { sendPasswordResetEmail } from 'firebase/auth'

export const ResetPassword = () => {
    const navigate = useNavigate()
    const onFinish = async (data: { email: string }) => {
        try {
            await sendPasswordResetEmail(auth, data.email)
            alert('Сообщение отправленно Вам на почту!')
            navigate(ROUTES.LOGIN)
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
                    name='reset_password'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='email'
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Email' />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ width: '100%' }} type='primary' htmlType='submit'>
                            Отправить
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </Layout>
    )
}
