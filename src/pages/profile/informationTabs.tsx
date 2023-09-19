import { TabsProps } from 'antd'
import { EmptyWithModal } from '../../components'

export const infoTabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Общий сведения',
        children: <EmptyWithModal formName='generalInformation' />,
    },
    {
        key: '2',
        label: 'Работа и образование',
        children: (
            <>
                <EmptyWithModal formName='jobAndEducation' />
            </>
        ),
    },
    {
        key: '3',
        label: 'Места проживания',
        children: (
            <>
                <EmptyWithModal formName='dwelling' />
            </>
        ),
    },
    {
        key: '4',
        label: 'Контактная и основная информация',
        children: (
            <>
                <EmptyWithModal formName='basicInformation' />
            </>
        ),
    },
    {
        key: '5',
        label: 'Семья и отношения',
        children: (
            <>
                <EmptyWithModal formName='family' />
            </>
        ),
    },
    {
        key: '6',
        label: 'Информация о вас',
        children: (
            <>
                <EmptyWithModal formName='infoAboutYourself' />
            </>
        ),
    },
]
