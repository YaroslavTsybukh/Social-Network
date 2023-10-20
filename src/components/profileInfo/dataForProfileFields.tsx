import {
    BulbOutlined,
    DesktopOutlined,
    FormOutlined,
    HomeOutlined,
    LaptopOutlined,
    MailOutlined,
    PhoneOutlined,
    SmileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { IUserProfileField } from '../../core/shared/userProfileField.interface.ts'
import { ReactNode } from 'react'

interface IInfo {
    field: keyof IUserProfileField
    icon: ReactNode
    text: string
}
interface IInfoCategories {
    category: string
    items: IInfo[]
}
export const infoCategories: IInfoCategories[] = [
    {
        category: 'generalInformation',
        items: [
            {
                field: 'workPlace',
                icon: <LaptopOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Место работы',
            },
            {
                field: 'education',
                icon: <BulbOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Образование',
            },
            { field: 'city', icon: <SmileOutlined style={{ fontSize: 18, marginRight: 10 }} />, text: 'Город' },
            {
                field: 'familyStatus',
                icon: <LaptopOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Семейное положение',
            },
            {
                field: 'phone',
                icon: <PhoneOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Телефон',
            },
        ],
    },
    {
        category: 'jobAndEducation',
        items: [
            { field: 'work', icon: <DesktopOutlined style={{ fontSize: 18, marginRight: 10 }} />, text: 'Работа' },
            { field: 'university', icon: <BulbOutlined style={{ fontSize: 18, marginRight: 10 }} />, text: 'Вуз' },
            {
                field: 'school',
                icon: <BulbOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Средняя школа',
            },
        ],
    },
    {
        category: 'dwelling',
        items: [
            {
                field: 'nativeCity',
                icon: <HomeOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Укажите родной город',
            },
            {
                field: 'newCity',
                icon: <HomeOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Добавить город',
            },
        ],
    },
    {
        category: 'basicInformation',
        items: [
            {
                field: 'phoneNumber',
                icon: <PhoneOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Мобильный',
            },
            {
                field: 'email',
                icon: <MailOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Электронный адресс',
            },
            {
                field: 'webSite',
                icon: <FormOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Добавьте веб-сайт',
            },
            {
                field: 'profile',
                icon: <FormOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Добавьте ссылку на свой профиль в сети',
            },
            {
                field: 'gender',
                icon: <TeamOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Пол',
            },
            {
                field: 'date',
                icon: <SmileOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'День рождения',
            },
        ],
    },
    {
        category: 'family',
        items: [
            {
                field: 'familyStatus',
                icon: <TeamOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Семейное положение',
            },
        ],
    },
    {
        category: 'infoAboutYourself',
        items: [
            {
                field: 'infoAboutMyself',
                icon: <UserOutlined style={{ fontSize: 18, marginRight: 10 }} />,
                text: 'Расскажите о себе',
            },
        ],
    },
]
