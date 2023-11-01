import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'

import { auth } from '../../firebase.ts'

export const useAuth = () => {
    const [user, setUser] = useState<null | User>(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser(null)
        })
    }, [])

    return user
}
