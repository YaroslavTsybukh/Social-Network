import { FC } from 'react'
import { Image } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

interface IProps {
    urls: string[]
}
export const SliderImages: FC<IProps> = ({ urls }) => {
    return (
        <>
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='mySwiper'>
                {urls.map((url, i) => (
                    <SwiperSlide key={i}>
                        <Image width='100%' height='100%' src={url} alt='Image in post' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
