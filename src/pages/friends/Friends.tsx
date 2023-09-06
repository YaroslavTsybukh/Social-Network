import { Layout } from '../../layout/Layout.tsx'
import { Badge, Card, Col, Row, Select } from 'antd'
import { Link } from 'react-router-dom'

export const Friends = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    return (
        <Layout>
            <Select
                defaultValue='Все друзья'
                onChange={handleChange}
                options={[
                    { value: 'all', label: 'Все друзья' },
                    { value: 'online', label: 'В онлайне' },
                ]}
                style={{ width: '100%', marginBottom: 30 }}
            />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                <Col className='gutter-row' span={6}>
                    <Badge.Ribbon text='Online' color='green'>
                        <Link to='/friend/1'>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt='example'
                                        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                    />
                                }
                            >
                                <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                            </Card>
                        </Link>
                    </Badge.Ribbon>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Badge.Ribbon text='Online' color='green'>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt='example'
                                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                />
                            }
                        >
                            <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 26 }} style={{ marginBottom: 30 }}>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                </Col>
                <Col className='gutter-row' span={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt='example'
                                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            />
                        }
                    >
                        <Card.Meta title='Europe Street beat' description='Перейти' />
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}
