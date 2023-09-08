import { Layout } from '../../layout/Layout.tsx'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <Result
                status='404'
                title='404'
                subTitle='К сожалению, страница, которую вы посетили, не существует.'
                extra={
                    <Button type='primary' onClick={() => navigate('/')}>
                        Вернуться на главную страницу
                    </Button>
                }
            />
        </Layout>
    )
}
