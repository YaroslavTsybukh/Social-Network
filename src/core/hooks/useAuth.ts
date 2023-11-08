import { useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'

import { auth } from '../../firebase.ts'

export const useAuth = () => {
    const [user, setUser] = useState<null | User>(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser(null)
        })

        return () => unsub()
    }, [])

    return user
}
