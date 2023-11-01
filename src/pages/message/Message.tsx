import { useEffect, useRef } from 'react'
import { MessageList } from 'react-chat-elements'
import { Button, Form, Input, Space } from 'antd'

import { Layout } from '../../layout/Layout.tsx'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.ts'
import { useAuth } from '../../core/hooks/useAuth.ts'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

export const Message = () => {
    const ref = useRef(null)
    const currentUser = useAuth()

    useEffect(() => {
        if (currentUser) {
            const unsub = onSnapshot(
                doc(db, 'userChats', currentUser.uid),
                (snapshot) => {
                    console.log(snapshot.data())
                },
                (error) => {
                    console.log(error.message)
                },
            )

            return () => unsub()
        }
    }, [currentUser])

    const onFinish = async (data: { message: string }) => {
        // await updateDoc(doc(db, 'chats'))
        console.log(data)
    }
    return (
        <Layout>
            <section>
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    referance={ref}
                    dataSource={[
                        {
                            id: 1,
                            position: 'left',
                            type: 'text',
                            title: 'Kursat',
                            text: 'Give me a message list example !',
                            focus: true,
                            titleColor: 'black',
                            date: new Date(),
                            removeButton: true,
                            forwarded: true,
                            replyButton: true,
                            status: 'read',
                            notch: true,
                            retracted: false,
                        },
                        {
                            id: 2,
                            position: 'right',
                            type: 'text',
                            title: 'Emre',
                            text: "That's all.",
                            focus: false,
                            titleColor: 'black',
                            date: new Date(),
                            removeButton: false,
                            forwarded: false,
                            replyButton: false,
                            status: 'waiting',
                            notch: true,
                            retracted: false,
                        },
                        {
                            id: 3,
                            position: 'right',
                            type: 'text',
                            title: 'Emre',
                            text: 'Как дела',
                            focus: false,
                            titleColor: 'black',
                            date: new Date(),
                            removeButton: false,
                            forwarded: false,
                            replyButton: false,
                            status: 'sent',
                            notch: true,
                            retracted: false,
                        },
                        {
                            id: 4,
                            position: 'left',
                            type: 'text',
                            title: 'Emre',
                            text: 'Все хорошо',
                            focus: false,
                            titleColor: 'black',
                            date: new Date(),
                            removeButton: false,
                            forwarded: false,
                            replyButton: false,
                            status: 'sent',
                            notch: true,
                            retracted: false,
                        },
                    ]}
                />
                <Form name='messages' onFinish={onFinish}>
                    <Form.Item name='message' rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder='Введите ваше сообщение...' />
                            <Button type='primary' htmlType='submit'>
                                Отправить
                            </Button>
                        </Space.Compact>
                    </Form.Item>
                </Form>
            </section>
        </Layout>
    )
}
