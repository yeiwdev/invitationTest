// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
// Import Swiper styles
import "swiper/css"

interface SwiperComponentProps {
  slideList: string[]
  swiperIndex: number
}

const isVertical = (img: string) => {
  return (
    img.indexOf(`1_1_05`) > 0 ||
    img.indexOf(`1_9_02`) > 0 ||
    img.indexOf(`2_1_13`) > 0
  )
}
export default function SwiperComponent({
  slideList,
  swiperIndex,
}: SwiperComponentProps) {
  return (
    <Swiper
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        swiper.slideToLoop(swiperIndex)
      }}
      navigation
      modules={[Navigation]}
      loop
    >
      {slideList.map((item) => (
        <SwiperSlide key={Math.random()}>
          <img
            src={item}
            alt="snaps"
            className={isVertical(item) ? `vertical` : ``}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
