import { FC, useEffect, useState } from 'react'
import { Spin } from 'antd'
import { DocumentData, doc, onSnapshot } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

import { EmptyWithModal } from './EmptyWithModal.tsx'
import { ProfileInfo } from './ProfileInfo.tsx'

import { db, auth } from '../../firebase.ts'

export const ProfileInfoWrapper: FC<{ formName: string }> = ({ formName }) => {
    const [userData, setData] = useState<DocumentData | null>(null)
    const [process, setProcess] = useState<string>('loading')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const unsubscribe = onSnapshot(doc(db, 'users', user!.uid), (doc) => {
                if (doc.exists()) {
                    setData(doc.data())
                } else {
                    setData(null)
                }

                setProcess('confirmed')
            })

            return () => unsubscribe()
        })
    }, [])

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
