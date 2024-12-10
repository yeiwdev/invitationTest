"use client"

import { useState } from "react"
import Image from "next/image"
import GalleryModal from "./GalleryModal"

export default function GalleryList({ imageList }: PosterProps) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [swiperIndex, setSwiperIndex] = useState(0)

  const openPhotoModal = (index: number) => {
    setIsPhotoModalOpen(true)
    setSwiperIndex(index)
  }

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false)
  }

  return (
    <>
      <ul className="flex flex-wrap flex-col gallery">
        {imageList.map((item, index) => (
          <li className="img_wrap" key={Math.random()}>
            <button
              type="button"
              data-photo={index}
              onClick={() => {
                openPhotoModal(index)
              }}
            >
              <div>
                <Image
                  src={item}
                  alt="call"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
      <GalleryModal
        isOpen={isPhotoModalOpen}
        onClose={closePhotoModal}
        imageFiles={imageList}
        swiperIndex={swiperIndex}
      />
    </>
  )
}
