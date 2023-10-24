import { FC, useState } from 'react'
import { Space } from 'antd'
import { UserProfileFilledFields } from './UserProfileFilledFields.tsx'
import { infoCategories } from './dataForProfileFields.tsx'

import { DocumentData } from 'firebase/firestore'
import { PlusCircleTwoTone } from '@ant-design/icons'
import { ModalWithForm } from './ModalWithForm.tsx'

export const ProfileInfo: FC<{ data: DocumentData; formName: string }> = ({ data, formName }) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const category = infoCategories.find((info) => info.category == formName)

    let userInfo

    switch (formName) {
        case 'generalInformation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={handleOpenModal} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        case 'jobAndEducation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields key={idx} data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={() => setOpen(true)} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        case 'dwelling':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={() => setOpen(true)} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        case 'basicInformation':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={() => setOpen(true)} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        case 'family':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={() => setOpen(true)} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        case 'infoAboutYourself':
            userInfo = (
                <Space direction='vertical' size={30}>
                    {category?.items.map(
                        ({ field, icon, text }, idx) =>
                            field && (
                                <Space key={idx}>
                                    <UserProfileFilledFields data={data[field]} icon={icon} text={text} />

                                    {!data[field] && <PlusCircleTwoTone onClick={() => setOpen(true)} />}
                                </Space>
                            ),
                    )}
                    <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
                </Space>
            )
            break
        default:
            userInfo = null
            break
    }

    return <>{userInfo}</>
}
