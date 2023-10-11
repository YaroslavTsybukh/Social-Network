import { FC, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { Spin } from 'antd'
import { EmptyWithModal } from './EmptyWithModal.tsx'
import { ProfileInfo } from './ProfileInfo.tsx'
import { db } from '../../firebase.ts'

import { DocumentData } from 'firebase/firestore'

export const ProfileInfoWrapper: FC<{ formName: string }> = ({ formName }) => {
    const [userData, setData] = useState<DocumentData | null>(null)
    const [process, setProcess] = useState<string>('loading')

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'userData', 'userInformation'), (doc) => {
            if (doc.exists()) {
                setData(doc.data())
            } else {
                setData(null)
            }

            setProcess('confirmed')
        })

        return () => unsubscribe()
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
