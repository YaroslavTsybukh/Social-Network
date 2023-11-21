import { doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import { User } from 'firebase/auth'

import { db } from '../../firebase.ts'
import { useCallback } from 'react'
import { IUser } from '../shared/user.interface.ts'

export const useChatService = () => {
    const updateUserChat = async (user: User | IUser, chatPerson: IUser | User, combinedId: string) => {
        await updateDoc(doc(db, 'userChats', user.uid), {
            [combinedId + '.userInfo']: {
                uid: chatPerson.uid,
                displayName: chatPerson.displayName,
            },
            [combinedId + '.date']: serverTimestamp(),
        })
    }

    const getUserChats = useCallback((currentUser: User) => {
        return new Promise((resolve, reject) => {
            const unsub = onSnapshot(
                doc(db, 'userChats', currentUser.uid),
                (doc) => {
                    resolve({ data: doc.data(), unsub })
                },
                (error) => reject(error),
            )
        })
    }, [])

    // const getSearchedChats = useCallback((currentUser: User, search: string) => {
    //     return new Promise((resolve, reject) => {
    //         if (!search) {
    //             resolve(null)
    //         } else {
    //             const unsub = onSnapshot(
    //                 doc(db, 'userChats', currentUser.uid),
    //                 (doc) => {
    //                     // const necessaryObject = Object.values(doc.data()!).find(
    //                     //     (obj) => obj.userInfo.displayName == search,
    //                     // )
    //                     resolve({ data: Object.values(doc.data()!), unsub })
    //                 },
    //                 (error) => {
    //                     reject(error)
    //                 },
    //             )
    //         }
    //     })
    // }, [])

    return { updateUserChat, getUserChats }
}
