import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Button, Form, Input, Space, Upload, Card, message } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'
import { IPostField } from '../shared/IPostField.ts'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase.ts'

export const AddPost = () => {
    const { handleSubmit, control, reset } = useForm<IPostField>({
        defaultValues: {
            description: '',
            images: [],
            timestamp: '',
        },
    })

    const [fileList, setFileList] = useState<UploadFile[]>([])
    const [urlList, setUrlList] = useState<string[]>([])

    const onSubmit: SubmitHandler<IPostField> = async (data) => {
        const transformData = {
            ...data,
            images: urlList,
            timestamp: serverTimestamp(),
        }

        await addDoc(collection(db, 'posts'), transformData)

        setUrlList([])
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
            const imagesRef = ref(storage, `images/${file.name}`)
            const uploadImage = uploadBytesResumable(imagesRef, file)

            uploadImage.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    message.info('Upload is ' + progress + '% done')
                },
                (error) => {
                    message.error(error.code)
                },
                async () => {
                    const url = await getDownloadURL(uploadImage.snapshot.ref)
                    setUrlList([...urlList, url])
                    setFileList([...fileList, file])
                },
            )

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
