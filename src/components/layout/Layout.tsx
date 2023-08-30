import React from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TrademarkCircleTwoTone,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout as LayoutAnt, Menu, Input, theme } from 'antd'

const { Search } = Input
const { Header, Content, Sider } = LayoutAnt

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}))

interface IProps {
    children: string
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const onSearch = (value: string) => console.log(value)

    return (
        <LayoutAnt>
            <Header
                style={{
                    padding: '10px 16px 10px 28px',
                    background: colorBgContainer,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <TrademarkCircleTwoTone style={{ fontSize: '40px' }} />
                <Search
                    placeholder='input search text'
                    onSearch={onSearch}
                    enterButton
                    size='middle'
                    style={{ width: '500px' }}
                />
            </Header>
            <LayoutAnt hasSider>
                <Sider
                    style={{
                        maxHeight: 'calc(100vh - 88px)',
                        position: 'sticky',
                        left: 0,
                        top: '88px',
                        bottom: 0,
                    }}
                >
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <LayoutAnt style={{ marginLeft: 200 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                            <p>{children}</p>
                            {
                                // indicates very long content
                                Array.from({ length: 100 }, (_, index) => (
                                    <React.Fragment key={index}>
                                        {index % 20 === 0 && index ? 'more' : '...'}
                                        <br />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </Content>
                </LayoutAnt>
            </LayoutAnt>
        </LayoutAnt>
    )
}
