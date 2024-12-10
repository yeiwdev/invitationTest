import HandleModifyImage from "../../utils/handleModifyImage"
import PosterMain from "./PosterMain"

function Poster({ pageType, imageList, randomNumber }: PosterProps) {
  function getRandomImage() {
    const ArrayImage =
      pageType === `p` ? HandleModifyImage(imageList) : imageList
    const randomIndex =
      randomNumber !== undefined && typeof randomNumber === `string`
        ? +randomNumber % ArrayImage.length
        : Math.floor(Math.random() * ArrayImage.length)
    return ArrayImage[randomIndex]
  }

  return (
    <section className="relative">
      <div className="poster relative before:content-['Before'] after:content-['After']">
        <PosterMain src={getRandomImage()} />
        <img
          src="/images/title_married_01.png"
          alt="title poster"
          className="absolute left-1/2 -translate-x-1/2 top-9 z-10 w-3/4"
        />
        <div className="absolute bottom-6 w-full z-10 text-center text-zinc-200">
          <div className="tracking-widest text-2xl">
            이준서 <span>&</span> 김은재
          </div>
          <div className="text-base mt-2">2024.06.02 SUN AM 11:00</div>
          <div className="text-base mt-0.5">
            <span className="text-nowrap inline-block">
              서울대학교 교수회관&nbsp;
            </span>
            <span className="text-nowrap inline-block">2층 컨벤션홀</span>
          </div>
        </div>
      </div>
      <div
        id="sakura_bg"
        className="absolute top-0 left-0 w-full h-full z-20"
      />
    </section>
  )
}

export default Poster
