import { Button, Empty, Form, Modal } from 'antd'
import { FC, ReactNode, useState } from 'react'
import dayjs from 'dayjs'

interface IProps {
    children: ReactNode
    formName: string
}

export const EmptyWithModal: FC<IProps> = ({ children, formName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
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
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    {children}
                </Form>
            </Modal>
        </>
    )
}
