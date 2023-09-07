import { Button, DatePicker, Form, Input, TabsProps } from 'antd'
import { EmptyWithModal } from '../../components'
import { FieldType } from '../../shared/modalField.interface.ts'
import { InfoCircleOutlined, SaveOutlined } from '@ant-design/icons'

export const infoTabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Общий сведения',
        children: (
            <EmptyWithModal formName='generalInformation'>
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
            </EmptyWithModal>
        ),
    },
    {
        key: '2',
        label: 'Работа и образование',
        children: (
            <>
                <EmptyWithModal formName='jobAndEducation'>
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
                </EmptyWithModal>
            </>
        ),
    },
    {
        key: '3',
        label: 'Места проживания',
        children: (
            <>
                <EmptyWithModal formName='dwelling'>
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
                </EmptyWithModal>
            </>
        ),
    },
    {
        key: '4',
        label: 'Контактная и основная информация',
        children: (
            <>
                <EmptyWithModal formName='basicInformation'>
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
                        <DatePicker format={'DD/MM/YYYY'} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
                            Сохранить
                        </Button>
                    </Form.Item>
                </EmptyWithModal>
            </>
        ),
    },
    {
        key: '5',
        label: 'Семья и отношения',
        children: (
            <>
                <EmptyWithModal formName='family'>
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
                </EmptyWithModal>
            </>
        ),
    },
    {
        key: '6',
        label: 'Информация о вас',
        children: (
            <>
                <EmptyWithModal formName='infoAboutYourself'>
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
                </EmptyWithModal>
            </>
        ),
    },
]
