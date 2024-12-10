"use client"

import { useState } from "react"
import LocationModal from "./LocationModal"

export default function LocationButton() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)

  const openLocationModal = () => {
    setIsLocationModalOpen(true)
  }

  const closeLocationModal = () => {
    setIsLocationModalOpen(false)
  }

  return (
    <>
      <div>
        <button
          type="button"
          className="w-10/12 max-w-iph12 h-12 mr-auto ml-auto mt-8 mb-3 block bg-neutral-200 text-neutral-900 rounded"
          onClick={() => {
            openLocationModal()
          }}
        >
          지도 바로가기
        </button>
      </div>
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={closeLocationModal}
      />
    </>
  )
}
