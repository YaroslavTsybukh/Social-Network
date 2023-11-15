import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase.ts'
import { useCallback } from 'react'

export const useUserService = () => {
    const getUsers = useCallback(() => {
        return new Promise((resolve, reject) => {
            const unsub = onSnapshot(
                query(collection(db, 'users')),
                (doc) => {
                    const newArr = doc.docs.map((doc) => ({ ...doc.data() }))

                    resolve({ data: newArr, unsub })
                },
                (error) => {
                    reject(error)
                },
            )
        })
    }, [])

    const getSearchedUsers = useCallback((search: string) => {
        return new Promise((resolve, reject) => {
            if (!search) {
                resolve(null)
            } else {
                const q = query(collection(db, 'users'), where('displayName', '==', search))
                const unsub = onSnapshot(
                    q,
                    (doc) => {
                        const newArr = doc.docs.map((doc) => ({ ...doc.data() }))
                        resolve({ data: newArr, unsub })
                    },
                    (error) => {
                        reject(error)
                    },
                )
            }
        })
    }, [])

    return { getUsers, getSearchedUsers }
}
