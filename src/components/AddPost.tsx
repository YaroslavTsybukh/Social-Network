import React from 'react'
import { Button, Form, Input, Space, FormInstance, Upload, UploadProps, Card } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const props: UploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList)
        }
    },
}

export const AddPost = () => {
    const [form] = Form.useForm()
    return (
        <Card style={{ marginBottom: 30 }}>
            <Form form={form} name='validateOnly' layout='vertical' autoComplete='off'>
                <Form.Item name='name' rules={[{ required: true, message: 'Fill this field , please !' }]}>
                    <Input placeholder='Что у вас нового?' />
                </Form.Item>
                <Form.Item>
                    <Space size={100}>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                        <SubmitButton form={form} />
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    )
}

const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false)

    // Watch all values
    const values = Form.useWatch([], form)

    React.useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true)
            },
            () => {
                setSubmittable(false)
            },
        )
    }, [values])

    return (
        <Button type='primary' htmlType='submit' disabled={!submittable}>
            Отправить новую запись
        </Button>
    )
}
