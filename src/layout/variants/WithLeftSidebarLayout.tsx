import { Layout as LayoutAnt } from 'antd'
import { LeftSidebar } from '../index.ts'
import { ReactNode, FC } from 'react'

interface IProps {
    childrenInfo: ReactNode
}

export const WithLeftSidebarLayout: FC<IProps> = ({ childrenInfo }) => {
    return (
        <LayoutAnt hasSider>
            <LeftSidebar />
            <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>{childrenInfo}</LayoutAnt.Content>
        </LayoutAnt>
    )
}
