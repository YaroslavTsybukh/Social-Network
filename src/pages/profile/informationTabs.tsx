import { TabsProps } from 'antd'
import { ProfileInfoWrapper } from '../../components'

export const infoTabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Общий сведения',
        children: <ProfileInfoWrapper formName='generalInformation' />,
    },
    {
        key: '2',
        label: 'Работа и образование',
        children: <ProfileInfoWrapper formName='jobAndEducation' />,
    },
    {
        key: '3',
        label: 'Места проживания',
        children: <ProfileInfoWrapper formName='dwelling' />,
    },
    {
        key: '4',
        label: 'Контактная и основная информация',
        children: <ProfileInfoWrapper formName='basicInformation' />,
    },
    {
        key: '5',
        label: 'Семья и отношения',
        children: <ProfileInfoWrapper formName='family' />,
    },
    {
        key: '6',
        label: 'Информация о вас',
        children: <ProfileInfoWrapper formName='infoAboutYourself' />,
    },
]
