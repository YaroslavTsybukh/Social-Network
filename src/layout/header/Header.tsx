import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { TrademarkCircleTwoTone } from '@ant-design/icons'
import { Menu, Layout, Input, MenuProps } from 'antd'

import { menuItems } from './menuItems.tsx'
import { ROUTES } from '../../routes'
import { useAuth } from '../../core/hooks/useAuth.ts'

export const Header = () => {
    const [current, setCurrent] = useState('home')
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const currentUser = useAuth()

    const onSearch = async (value: string) => navigate(`${ROUTES.SEARCH}?q=${encodeURIComponent(value)}`)

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <Layout.Header
            style={{
                padding: '10px 16px 10px 16px',
                background: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Link to={ROUTES.HOME} style={{ display: 'inline-flex' }}>
                <TrademarkCircleTwoTone style={{ fontSize: '45px' }} />
            </Link>

            {currentUser && pathname !== '/login' && pathname !== '/register' ? (
                <>
                    <nav>
                        <Menu
                            mode='horizontal'
                            selectedKeys={[current]}
                            onClick={onClick}
                            className='menu'
                            items={menuItems}
                        />
                    </nav>
                    <Input.Search
                        placeholder='Поиск пользователей'
                        onSearch={onSearch}
                        enterButton
                        size='middle'
                        style={{ width: '500px' }}
                    />
                </>
            ) : null}
        </Layout.Header>
    )
}
