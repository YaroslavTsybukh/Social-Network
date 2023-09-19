import { useEffect, useState } from 'react'
import { Post } from './post/Post.tsx'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase.ts'
import { IPostField } from '../shared/postField.interface.ts'

export const Posts = () => {
    const [posts, setPosts] = useState<IPostField[]>([])
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
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
    }, [])

    return (
        <section>
            {posts.map((post) => (
                <Post key={post.id} postInfo={post} />
            ))}
        </section>
    )
}
