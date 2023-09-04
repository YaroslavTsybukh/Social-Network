import React from 'react'
import { Header, LeftSidebar, RightSidebar } from './index.ts'

import { FormOutlined } from '@ant-design/icons'
import { Layout as LayoutAnt, FloatButton } from 'antd'
import { useParams } from 'react-router-dom'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const params = useParams()
    console.log(params)
    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Header />
            <LayoutAnt hasSider>
                <LeftSidebar />

                <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>{children}</LayoutAnt.Content>

                {!params.messageId ? <RightSidebar /> : null}
            </LayoutAnt>
            <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
        </LayoutAnt>
    )
}
