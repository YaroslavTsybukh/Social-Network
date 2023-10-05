import { FC } from 'react'
import { Space } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { UserProfileFilledFields } from './UserProfileFilledFields.tsx'
import { infoCategories } from './dataForProfileFields.tsx'
dayjs.locale('ru')

import { DocumentData } from 'firebase/firestore'

export const ProfileInfo: FC<{ tab: string; data: DocumentData }> = ({ tab, data }) => {
    let userInfo

    const category = infoCategories.find((info) => info.category == tab)

    switch (tab) {
        case 'generalInformation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        case 'jobAndEducation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        case 'dwelling':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        case 'basicInformation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        case 'family':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        case 'infoAboutYourself':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />,
                    )}
                </Space>
            )
            break
        default:
            userInfo = null
            break
    }

    return <>{userInfo}</>
}
