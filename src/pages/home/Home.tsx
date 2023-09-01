import { Layout } from '../../layout/Layout.tsx'
import { AddPost, Posts } from '../../components'

export const Home = () => {
    return (
        <Layout>
            <AddPost />
            <Posts />
        </Layout>
    )
}
