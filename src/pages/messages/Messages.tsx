import { Layout } from '../../layout/Layout.tsx'
import { Card } from 'antd'

export const Messages = () => {
    return (
        <Layout>
            <Card bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Layout>
    )
}
