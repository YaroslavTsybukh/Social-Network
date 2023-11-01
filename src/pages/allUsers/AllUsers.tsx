import { Layout } from '../../layout/Layout.tsx'
import { Button, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'

export const AllUsers = () => {
    const [searchParams] = useSearchParams()

    console.log(searchParams.get('q'))

    return (
        <Layout>
            <section>
                <Card title='Люди' style={{ width: 700, margin: '0 auto' }}>
                    <Card
                        type='inner'
                        title='Ярослав'
                        hoverable={true}
                        style={{ marginTop: 30 }}
                        extra={
                            <Button type='primary' icon={<PlusOutlined />}>
                                Добавить в друзья
                            </Button>
                        }
                    >
                        <Card.Grid style={{ display: 'none' }} />
                    </Card>
                </Card>
            </section>
        </Layout>
    )
}
