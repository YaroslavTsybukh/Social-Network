import { FC, useState } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Button, Empty } from 'antd'
import { ModalWithForm } from './ModalWithForm.tsx'

dayjs.extend(customParseFormat)

export const EmptyWithModal: FC<{ formName: string }> = ({ formName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{ height: 60 }}
                description={<span>Нужно добавить информацию</span>}
            >
                <Button type='primary' onClick={handleOpenModal}>
                    Добавить информацию
                </Button>
            </Empty>
            <ModalWithForm
                formName={formName}
                setIsModalOpen={handleOpenModal}
                setIsModalClose={handleCloseModal}
                isModalOpen={isModalOpen}
            />
        </>
    )
}
