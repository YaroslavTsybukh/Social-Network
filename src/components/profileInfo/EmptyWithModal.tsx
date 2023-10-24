import { FC, useState } from 'react'
import { Button, Empty } from 'antd'

import { ModalWithForm } from './ModalWithForm.tsx'

export const EmptyWithModal: FC<{ formName: string }> = ({ formName }) => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
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
            <ModalWithForm formName={formName} setCloseModal={handleCloseModal} isOpenModal={isOpen} />
        </>
    )
}
