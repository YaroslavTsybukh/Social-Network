import { Card, Input, Tabs, TabsProps } from 'antd'
import { AddPost, FriendsGrid, Posts } from '../../components'
import { infoTabs } from './informationTabs.tsx'

const onSearch = (value: string) => console.log(value)
export const mainTabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Публикации',
        children: (
            <Card>
                <AddPost />
                <Posts />
            </Card>
        ),
    },
    {
        key: '2',
        label: 'Информация',
        children: (
            <Card>
                <Tabs tabPosition='left' items={infoTabs} onChange={(data) => console.log(data)} />
            </Card>
        ),
    },
    {
        key: '3',
        label: 'Друзья',
        children: (
            <Card>
                <Input.Search
                    placeholder='Поиск по друзьям...'
                    onSearch={onSearch}
                    style={{ marginBottom: 50 }}
                    enterButton
                    size='middle'
                />
                <FriendsGrid />
            </Card>
        ),
    },
]
