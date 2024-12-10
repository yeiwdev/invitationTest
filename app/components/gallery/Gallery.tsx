import HandleModifyImage from "../../utils/handleModifyImage"
import GalleryList from "./GalleryList"

export default function Gallery({ pageType, imageList }: PosterProps) {
  const ArrayImage = pageType === `p` ? HandleModifyImage(imageList) : imageList
  return (
    <section>
      <div className="bg-neutral-100">
        <div className="ml-auto mr-auto w-full max-w-iph12 pt-8 pb-20 pr-4 pl-4 box-border">
          <h5 className="text-center text-lg tracking-wider text-zinc-400 mt-8 mb-7">
            GALLERY
          </h5>
          <GalleryList imageList={ArrayImage} />
        </div>
      </div>
    </section>
  )
}
