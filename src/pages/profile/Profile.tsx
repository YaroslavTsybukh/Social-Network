import { Layout } from '../../layout/Layout.tsx'
import {
    Badge,
    Button,
    Card,
    Col,
    DatePicker,
    Divider,
    Empty,
    Form,
    Image,
    Input,
    Modal,
    Row,
    Space,
    Tabs,
    TabsProps,
    Typography,
} from 'antd'
import { EditOutlined, InfoCircleOutlined, SaveOutlined } from '@ant-design/icons'
import { AddPost, Posts } from '../../components'
import { useState } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
interface FieldType {
    workPlace?: string
    education?: string
    city?: string
    familyStatus?: string
    phone?: string
    work?: string
    university?: string
    school?: string
    nativeCity?: string
    newCity?: string
    phoneNumber?: string
    email?: string
    webSite?: string
    profile?: string
    gender?: string
    date?: string
    infoAboutMyself?: string
}

export const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onSearch = (value: string) => console.log(value)

    const infoTabs: TabsProps['items'] = [
        {
            key: '1',
            label: 'Общий сведения',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Общие сведения'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='generalШnformation'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Место работы'
                                name='workPlace'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Образование'
                                name='education'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Город'
                                name='city'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Семейное положение'
                                name='familyStatus'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Телефон'
                                name='phone'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input type='tel' />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
        {
            key: '2',
            label: 'Работа и образование',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Работа и образование'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='jobAndEducation'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Работа'
                                name='work'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Вуз'
                                name='university'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Средняя школа'
                                name='school'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
        {
            key: '3',
            label: 'Места проживания',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Места проживания'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='dwelling'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Укажите родной город'
                                name='nativeCity'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Добавить город'
                                name='newCity'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
        {
            key: '4',
            label: 'Контактная и основная информация',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Контактная и основная информация'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='basicInformation'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Мобильный'
                                name='phoneNumber'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input type='tel' />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Электронный адресс'
                                name='email'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input type='email' />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Добавьте веб-сайт'
                                name='webSite'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Добавьте ссылку на свой профиль в сети'
                                name='profile'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='Пол'
                                name='gender'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label='День рождения'
                                name='date'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <DatePicker defaultValue={dayjs('01/01/2015', 'DD/MM/YYYY')} format={'DD/MM/YYYY'} />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
        {
            key: '5',
            label: 'Семья и отношения',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Семья и отношения'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='family'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Семейное положение'
                                name='familyStatus'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
        {
            key: '6',
            label: 'Информация о вас',
            children: (
                <>
                    <Empty
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: 60 }}
                        description={<span>Нужно добавить информацию</span>}
                    >
                        <Button type='primary' onClick={showModal}>
                            Добавить информацию
                        </Button>
                    </Empty>
                    <Modal
                        title='Общие сведения'
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleClose}
                        bodyStyle={{ marginTop: 30 }}
                    >
                        <Form
                            name='infoAboutYourself'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete='off'
                            layout='vertical'
                        >
                            <Form.Item<FieldType>
                                label='Расскажите о себе'
                                name='infoAboutMyself'
                                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            ),
        },
    ]

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Публикации',
            children: (
                <Card>
                    <AddPost />
                    <Posts />
                </Card>
            ),
        },
        {
            key: '2',
            label: 'Информация',
            children: (
                <Card>
                    <Tabs tabPosition='left' items={infoTabs} />
                </Card>
            ),
        },
        {
            key: '3',
            label: 'Друзья',
            children: (
                <Card>
                    <Input.Search placeholder='Поиск по друзьям...' onSearch={onSearch} enterButton size='middle' />
                    <div style={{ marginTop: 50 }}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                            <Col className='gutter-row' span={6}>
                                <Badge.Ribbon text='Online' color='green'>
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt='example'
                                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                            />
                                        }
                                    >
                                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                    </Card>
                                </Badge.Ribbon>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Badge.Ribbon text='Online' color='green'>
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt='example'
                                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                            />
                                        }
                                    >
                                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                    </Card>
                                </Badge.Ribbon>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                                </Card>
                            </Col>
                            <Col className='gutter-row' span={6}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='example'
                                            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                        />
                                    }
                                >
                                    <Card.Meta title='Europe Street beat' description='Перейти' />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Card>
            ),
        },
    ]

    const onChange = (key: string) => {
        console.log(key)
    }

    return (
        <Layout>
            <Card style={{ maxWidth: 900, width: '100%', margin: '0 auto' }}>
                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                    <Card.Meta
                        avatar={
                            <Image
                                width={150}
                                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                                alt='User Avatar'
                                style={{ borderRadius: '50%' }}
                            />
                        }
                        title='User Name'
                        description='Друзья: 100'
                        style={{ alignItems: 'center' }}
                    />
                    <Button type='primary' icon={<EditOutlined />}>
                        Редактировать профиль
                    </Button>
                </Space>
                <Divider />
                <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
            </Card>
        </Layout>
    )
}
