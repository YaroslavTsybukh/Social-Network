import { Layout } from '../../layout/Layout.tsx'
import { Select } from 'antd'
import { FriendsGrid } from '../../components'

export const Friends = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    return (
        <Layout>
            <section>
                <Select
                    defaultValue='Все друзья'
                    onChange={handleChange}
                    options={[
                        { value: 'all', label: 'Все друзья' },
                        { value: 'online', label: 'В онлайне' },
                    ]}
                    style={{ width: '100%', marginBottom: 30 }}
                />
                <FriendsGrid />
            </section>
        </Layout>
    )
}
