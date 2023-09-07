import { FloatButton, Layout as LayoutAnt } from 'antd'
import { LeftSidebar, RightSidebar } from '../index.ts'
import { FormOutlined } from '@ant-design/icons'
import { ReactNode, FC } from 'react'

interface IProps {
    childrenInfo: ReactNode
}

export const DefaultLayout: FC<IProps> = ({ childrenInfo }) => {
    return (
        <>
            <LayoutAnt hasSider>
                <LeftSidebar />

                <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    {childrenInfo}
                </LayoutAnt.Content>

                <RightSidebar />
            </LayoutAnt>
            <FloatButton icon={<FormOutlined />} onClick={() => console.log('click')} />
        </>
    )
}
