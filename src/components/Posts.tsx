import { usePostsStore } from '../stores/usePostsStore.ts'
import { selectPosts } from '../stores/selectors'
import { Post } from './Post.tsx'

export const Posts = () => {
    const posts = usePostsStore(selectPosts)

    return <section>{posts ? posts.map((post, idx) => <Post key={idx} postInfo={post} />) : null}</section>
}
