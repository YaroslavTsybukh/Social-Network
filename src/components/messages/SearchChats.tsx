import { FC, useEffect, useState, memo } from 'react'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'

import { CreateChat } from './CreateChat.tsx'
import { useDebounce } from '../../core/hooks/useDebounce.ts'

import { db } from '../../firebase.ts'

interface IProps {
    setSearchUser: (value: DocumentData | null) => void
}

export const SearchChats: FC<IProps> = memo(({ setSearchUser }) => {
    const [search, setSearch] = useState<string>('')
    const debouncedSearch = useDebounce(search)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const searchUserChat = async () => {
            const q = query(collection(db, 'users'), where('displayName', '==', debouncedSearch))
            const querySnapshot = await getDocs(q)
            if (querySnapshot.size > 0) {
                querySnapshot.forEach((snapShot) => {
                    setSearchUser(snapShot.data())
                })
            } else {
                setSearchUser(null)
            }
        }

        searchUserChat()
    }, [debouncedSearch, setSearchUser])

    const showModal = () => {
        setIsModalOpen(true)
    }

    return (
        <section>
            <Space.Compact style={{ width: '100%' }}>
                <Input
                    placeholder='default size'
                    style={{ marginBottom: 20 }}
                    prefix={<UserOutlined />}
                    allowClear={true}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button type='primary' icon={<PlusOutlined />} onClick={showModal}>
                    Добавить чат
                </Button>
                {isModalOpen && <CreateChat isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
            </Space.Compact>
        </section>
    )
})
