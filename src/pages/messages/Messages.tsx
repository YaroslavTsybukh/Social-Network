import { useState, useEffect, FC, Key, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatList, IChatItemProps } from 'react-chat-elements'
import {
    collection,
    query,
    where,
    getDocs,
    DocumentData,
    updateDoc,
    doc,
    serverTimestamp,
    setDoc,
} from 'firebase/firestore'

import { useDebounce } from '../../core/hooks/useDebounce.ts'
import { Layout } from '../../layout/Layout.tsx'
import { useAuth } from '../../core/hooks/useAuth.ts'
import { IUser } from '../../core/shared/searchUser.interface.ts'
import { SearchChats } from '../../components'

import { db } from '../../firebase.ts'
// TODO: work on code optimization and remove 4 useEffects

export const Messages: FC = () => {
    // const [search, setSearch] = useState<string>('')
    const [searchUser, setSearchUser] = useState<DocumentData | null>(null)
    const [users, setUsers] = useState<IUser[] | null>(null)
    // const [isModalOpen, setIsModalOpen] = useState(false)

    const navigate = useNavigate()
    // const debouncedSearch = useDebounce(search)
    const currentUser = useAuth()

    useEffect(() => {
        getUsers()
    }, [])

    // useEffect(() => {
    //     searchUserChat()
    // }, [debouncedSearch])

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const usersArray: IUser[] = []
        querySnapshot.forEach((doc) => {
            usersArray.push(doc.data() as IUser)
        })
        setUsers(usersArray)
    }

    // const searchUserChat = async () => {
    //     const q = query(collection(db, 'users'), where('displayName', '==', debouncedSearch))
    //     const querySnapshot = await getDocs(q)
    //
    //     if (querySnapshot.size > 0) {
    //         querySnapshot.forEach((snapShot) => {
    //             setSearchUser(snapShot.data())
    //         })
    //     } else {
    //         setSearchUser(null)
    //     }
    // }

    const handleClick = async (user: IChatItemProps) => {
        const { id, title } = user
        navigate(`/message/${id}`)

        if (currentUser) {
            const combinedId = currentUser.uid + id

            await setDoc(doc(db, 'chats', combinedId), { messages: [] })

            await updateDoc(doc(db, 'userChats', currentUser.uid), {
                [combinedId + '.userInfo']: {
                    uid: id,
                    displayName: title,
                },
                [combinedId + '.date']: serverTimestamp(),
            })

            await updateDoc(doc(db, 'userChats', String(id)), {
                [combinedId + '.userInfo']: {
                    uid: currentUser.uid,
                    displayName: currentUser.displayName,
                },
                [combinedId + '.date']: serverTimestamp(),
            })
        }
    }

    // const showModal = () => {
    //     setIsModalOpen(true)
    // }
    //
    // const handleOk = () => {
    //     setIsModalOpen(false)
    // }
    //
    // const handleCancel = () => {
    //     setIsModalOpen(false)
    // }
    //
    // const handleSearch = (value: string) => {
    //     console.log(value)
    // }

    // const rowSelection = {
    //     onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    //         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    //     },
    // }
    const handleSearchUser = useCallback((value: DocumentData | null) => {
        setSearchUser(value)
    }, [])
    return (
        <Layout>
            <SearchChats setSearchUser={handleSearchUser} />
            {/*<section>*/}
            {/*    <Space.Compact style={{ width: '100%' }}>*/}
            {/*        <Input*/}
            {/*            placeholder='default size'*/}
            {/*            style={{ marginBottom: 20 }}*/}
            {/*            prefix={<UserOutlined />}*/}
            {/*            allowClear={true}*/}
            {/*            onChange={(e) => setSearch(e.target.value)}*/}
            {/*        />*/}
            {/*        <Button type='primary' icon={<PlusOutlined />} onClick={showModal}>*/}
            {/*            Добавить чат*/}
            {/*        </Button>*/}
            {/*        <Modal*/}
            {/*            title='Мои друзья'*/}
            {/*            open={isModalOpen}*/}
            {/*            onOk={handleOk}*/}
            {/*            onCancel={handleCancel}*/}
            {/*            cancelText='Отмена'*/}
            {/*            okText='Создать чат'*/}
            {/*        >*/}
            {/*            <Input.Search placeholder='Поиск...' onSearch={handleSearch} />*/}
            {/*            <Table*/}
            {/*                rowSelection={{*/}
            {/*                    type: 'radio',*/}
            {/*                    ...rowSelection,*/}
            {/*                }}*/}
            {/*                showHeader={false}*/}
            {/*                columns={[*/}
            {/*                    {*/}
            {/*                        title: 'Имя',*/}
            {/*                        dataIndex: 'name',*/}
            {/*                    },*/}
            {/*                ]}*/}
            {/*                dataSource={data}*/}
            {/*                pagination={{ pageSize: 5 }}*/}
            {/*            />*/}
            {/*        </Modal>*/}
            {/*    </Space.Compact>*/}
            {/*</section>*/}
            <section>
                <ChatList
                    lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                    onClick={handleClick}
                    dataSource={
                        searchUser
                            ? [
                                  {
                                      id: 1,
                                      avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                      alt: 'kursat_avatar',
                                      title: searchUser?.displayName,
                                      subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                      date: new Date(),
                                      unread: 4,
                                      showMute: true,
                                      muted: true,
                                  },
                              ]
                            : !searchUser && users
                            ? users.map((user) => ({
                                  id: user?.uid,
                                  avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                  alt: 'kursat_avatar',
                                  title: user?.displayName,
                                  subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                  date: new Date(),
                                  unread: 4,
                                  showMute: true,
                                  muted: true,
                              }))
                            : []
                    }
                    id={1}
                />
            </section>
        </Layout>
    )
}
