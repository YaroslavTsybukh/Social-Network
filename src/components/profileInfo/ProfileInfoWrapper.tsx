import { FC, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { EmptyWithModal } from './EmptyWithModal.tsx'
import { ProfileInfo } from './ProfileInfo.tsx'
import { db } from '../../firebase.ts'

import { DocumentData } from 'firebase/firestore'

export const ProfileInfoWrapper: FC<{ formName: string }> = ({ formName }) => {
    const [userData, setData] = useState<DocumentData | null>(null)

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'userData', 'userInformation'), (doc) => {
            if (doc.exists()) {
                setData(doc.data())
            } else {
                setData(null)
            }
        })

        return () => unsubscribe()
    }, [])

    return (
        <>{userData ? <ProfileInfo data={userData} formName={formName} /> : <EmptyWithModal formName={formName} />}</>
    )
}
