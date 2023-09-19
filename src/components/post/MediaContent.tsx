import { FC } from 'react'
import { Image } from 'antd'
import { SliderImages } from '../SliderImages.tsx'

interface IUrls {
    urls: string[]
}

export const MediaContent: FC<IUrls> = ({ urls }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {urls.length > 1 && <SliderImages urls={urls} />}
            {urls.length == 1 && <Image width='50%' src={urls[0]} alt='Image in post' />}
        </div>
    )
}
