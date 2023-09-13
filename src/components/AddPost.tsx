import { Button, Form, Input, Space, Upload, Card, message } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { usePostsStore } from '../stores/usePostsStore.ts'
import { IPostField } from '../shared/IPostField.ts'
import { useState } from 'react'

export const AddPost = () => {
    const { handleSubmit, control, setValue, reset } = useForm<IPostField>({
        defaultValues: {
            description: '',
            images: '',
        },
    })
    const addPosts = usePostsStore((state) => state.addPost)
    const [fileList, setFileList] = useState<UploadFile[]>([])

    const onSubmit: SubmitHandler<IPostField> = (data) => {
        addPosts(data)
        setFileList([])
        reset()

        message.success('sending successfully.')
    }

    const uploadProps: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file)
            const newFileList = fileList.slice()
            newFileList.splice(index, 1)
            setFileList(newFileList)
        },
        beforeUpload: (file: RcFile) => {
            setFileList([...fileList, file])
            setValue('images', JSON.stringify(fileList))

            return false
        },
        fileList,
    }

    return (
        <section>
            <Card style={{ marginBottom: 30 }}>
                <Form name='addingPostForm' layout='vertical' autoComplete='off' onFinish={handleSubmit(onSubmit)}>
                    <Form.Item>
                        <Controller
                            name='description'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input placeholder='Что у вас нового?' onChange={onChange} value={value} />
                            )}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Controller
                            name='images'
                            control={control}
                            render={({ field }) => {
                                return (
                                    <Space size={100}>
                                        <Upload {...field} {...uploadProps}>
                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                        </Upload>
                                        <Button type='primary' htmlType='submit'>
                                            Отправить новую запись
                                        </Button>
                                    </Space>
                                )
                            }}
                        />
                    </Form.Item>
                </Form>
            </Card>
        </section>
    )
}
