import React from 'react'
import { Header, Sidebar } from './index.ts'

import { FormOutlined } from '@ant-design/icons'
import { Layout as LayoutAnt, FloatButton } from 'antd'

interface IProps {
    children: string
}

export const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <LayoutAnt>
            <Header />
            <LayoutAnt hasSider>
                <Sidebar />
                <LayoutAnt style={{ marginLeft: 100 }}>
                    <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, textAlign: 'center', background: '#ffffff' }}>{children}</div>
                    </LayoutAnt.Content>
                </LayoutAnt>
            </LayoutAnt>
            <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
        </LayoutAnt>
    )
}
