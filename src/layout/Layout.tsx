import React from 'react'
import { Header, LeftSidebar, RightSidebar } from './index.ts'

import { FormOutlined } from '@ant-design/icons'
import { Layout as LayoutAnt, FloatButton } from 'antd'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <LayoutAnt>
            <Header />
            <LayoutAnt hasSider>
                <LeftSidebar />

                <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ textAlign: 'center' }}>{children}</div>
                </LayoutAnt.Content>

                <RightSidebar />
            </LayoutAnt>
            <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
        </LayoutAnt>
    )
}
