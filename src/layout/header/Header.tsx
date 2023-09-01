import { useState } from 'react'
import { TrademarkCircleTwoTone } from '@ant-design/icons'
import { Menu, Layout, Input, MenuProps } from 'antd'
import { menuItems } from './menuItems.tsx'

export const Header = () => {
    const [current, setCurrent] = useState('home')
    const onSearch = (value: string) => console.log(value)
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <Layout.Header
            style={{
                padding: '10px 16px 10px 28px',
                background: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <TrademarkCircleTwoTone style={{ fontSize: '45px' }} />
            <nav>
                <Menu mode='horizontal' selectedKeys={[current]} onClick={onClick} className='menu' items={menuItems} />
            </nav>
            <Input.Search
                placeholder='input search text'
                onSearch={onSearch}
                enterButton
                size='middle'
                style={{ width: '500px' }}
            />
        </Layout.Header>
    )
}