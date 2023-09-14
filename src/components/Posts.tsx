import { useEffect, useState } from 'react'
import { Post } from './Post.tsx'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase.ts'
import { IPostField } from '../shared/IPostField.ts'

export const Posts = () => {
    const [posts, setPosts] = useState<IPostField[]>([])

    useEffect(() => {
        const q = query(collection(db, 'posts'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setPosts(
                querySnapshot.docs.map((data) => ({
                    id: data.id,
                    description: data.data().description || '',
                    images: data.data().images || [],
                    timestamp: data.data().timestamp || null,
                })),
            )
        })

        return () => unsubscribe()
    }, [])

    return (
        <section>
            {posts.map((post) => (
                <Post key={post.id} postInfo={post} />
            ))}
        </section>
    )
}
