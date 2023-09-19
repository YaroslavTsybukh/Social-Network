import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Button, Form, Input, Space, Upload, Card, message, Typography } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'
import { IPostField } from '../../shared/postField.interface.ts'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../firebase.ts'

export const AddPost = () => {
    const { handleSubmit, control, reset } = useForm<IPostField>({
        defaultValues: {
            description: '',
            urls: [],
            timestamp: serverTimestamp(),
        },
    })

    const [fileList, setFileList] = useState<UploadFile[]>([])
    const [urlList, setUrlList] = useState<string[]>([])

    const onSubmit: SubmitHandler<IPostField> = async (data) => {
        const transformData = {
            ...data,
            urls: urlList,
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
                    setUrlList((prevState) => [...prevState, url])
                    setFileList((prevState) => [...prevState, file])
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
                            rules={{ required: 'Заполните данное поле!' }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <>
                                    <Input placeholder='Что у вас нового?' onChange={onChange} value={value} />
                                    {error && <Typography.Text type='danger'>{error.message}</Typography.Text>}
                                </>
                            )}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Space size={100}>
                            <Controller
                                name='urls'
                                control={control}
                                render={({ field }) => (
                                    <Upload {...field} {...uploadProps}>
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                )}
                            />
                            <Button type='primary' htmlType='submit'>
                                Отправить новую запись
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </section>
    )
}
