import { useEffect, useState } from 'react'

import { IPostField } from '../core/shared/postField.interface.ts'
import { Post } from './post/Post.tsx'

import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../firebase.ts'

export const Posts = () => {
    const [posts, setPosts] = useState<IPostField[]>([])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const q = query(collection(db, `user/${user?.uid}/posts`), orderBy('timestamp', 'desc'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                setPosts(
                    querySnapshot.docs.map((data) => ({
                        id: data.id,
                        description: data.data().description || '',
                        urls: data.data().urls || [],
                        timestamp: data.data().timestamp || null,
                    })),
                )
            })

            return () => unsubscribe()
        })
    }, [])

    return (
        <section>
            {posts.map((post) => (
                <Post key={post.id} postInfo={post} />
            ))}
        </section>
    )
}
