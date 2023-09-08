import React from 'react'
import { Header, WithoutSidebarsLayout, DefaultLayout, WithLeftSidebarLayout } from './index.ts'

import { Layout as LayoutAnt } from 'antd'
import { useLocation } from 'react-router-dom'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const { pathname } = useLocation()

    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Header />

            {pathname == '/' || pathname == '/messages' ? (
                <DefaultLayout childrenInfo={children} />
            ) : pathname == '/friends' || pathname == '/message/1' ? (
                <WithLeftSidebarLayout childrenInfo={children} />
            ) : (
                <WithoutSidebarsLayout childrenInfo={children} />
            )}
        </LayoutAnt>
    )
}
