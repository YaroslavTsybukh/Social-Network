import React from 'react'
import { Header, WithoutSidebarsLayout, DefaultLayout, WithLeftSidebarLayout } from './index.ts'

import { Layout as LayoutAnt } from 'antd'
import { useLocation, useParams } from 'react-router-dom'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
    const params = useParams()
    const { pathname } = useLocation()
    console.log(params)

    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Header />

            {pathname == '/profile' || pathname == '/friend/1' ? (
                <WithoutSidebarsLayout childrenInfo={children} />
            ) : pathname == '/friends' || pathname == '/message/1' ? (
                <WithLeftSidebarLayout childrenInfo={children} />
            ) : (
                <DefaultLayout childrenInfo={children} />
            )}
        </LayoutAnt>
    )
}
