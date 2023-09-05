import React from 'react'
import { Header, LeftSidebar, RightSidebar } from './index.ts'

import { FormOutlined } from '@ant-design/icons'
import { Layout as LayoutAnt, FloatButton } from 'antd'
import { useLocation, useParams } from 'react-router-dom'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const params = useParams()
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Header />

            {/*TODO:`condition rework*/}

            {!params.messageId && pathname !== '/friends' && pathname !== '/profile' ? (
                <>
                    <LayoutAnt hasSider>
                        <LeftSidebar />

                        <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            {children}
                        </LayoutAnt.Content>

                        <RightSidebar />
                    </LayoutAnt>
                    <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
                </>
            ) : pathname == '/profile' ? (
                <>
                    <LayoutAnt>
                        <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            {children}
                        </LayoutAnt.Content>
                    </LayoutAnt>
                    <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
                </>
            ) : (
                <>
                    <LayoutAnt hasSider>
                        <LeftSidebar />
                        <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            {children}
                        </LayoutAnt.Content>
                    </LayoutAnt>
                </>
            )}
        </LayoutAnt>
    )
}
