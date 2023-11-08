import { FC, useEffect, useState } from 'react'
import { Spin } from 'antd'
import { DocumentData, doc, onSnapshot } from 'firebase/firestore'

import { EmptyWithModal } from './EmptyWithModal.tsx'
import { ProfileInfo } from './ProfileInfo.tsx'

import { db } from '../../firebase.ts'
import { useAuth } from '../../core/hooks/useAuth.ts'

export const ProfileInfoWrapper: FC<{ formName: string }> = ({ formName }) => {
    const [userData, setUserData] = useState<DocumentData | null>(null)
    const [process, setProcess] = useState<string>('loading')
    const currentUser = useAuth()

    useEffect(() => {
        if (currentUser) {
            const unsub = onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
                if (doc.exists()) {
                    setUserData(doc.data())
                } else {
                    setUserData(null)
                }

                setProcess('confirmed')
            })

            return () => unsub()
        }
    }, [currentUser])

    if (process == 'loading') {
        return <Spin />
    }

    return (
        <>
            {userData && process == 'confirmed' ? (
                <ProfileInfo data={userData} formName={formName} />
            ) : (
                <EmptyWithModal formName={formName} />
            )}
        </>
    )
}
