import { Layout } from '../../layout/Layout.tsx'
import { Button, Input, MessageList } from 'react-chat-elements'
import { useRef } from 'react'
export const Message = () => {
    const ref = useRef(null)

    return (
        <Layout>
            <div>
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
                <Input
                    placeholder='Type here...'
                    multiline={false}
                    maxHeight={100}
                    rightButtons={<Button text={'Send'} onClick={() => alert('Sending...')} title='Send' />}
                    autofocus={true}
                />
            </div>
        </Layout>
    )
}
