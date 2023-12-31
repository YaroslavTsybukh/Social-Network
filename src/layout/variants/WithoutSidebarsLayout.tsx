import { Layout as LayoutAnt } from 'antd'
import { ReactNode, FC } from 'react'

interface IProps {
    childrenInfo: ReactNode
}

export const WithoutSidebarsLayout: FC<IProps> = ({ childrenInfo }) => {
    return (
        <>
            <LayoutAnt>
                <LayoutAnt.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    {childrenInfo}
                </LayoutAnt.Content>
            </LayoutAnt>
        </>
    )
}
