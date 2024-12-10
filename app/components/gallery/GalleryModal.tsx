import Modal from "../Modal"
import SwiperComponent from "../SwiperComponent"

interface GalleryModalProps extends ModalProps {
  imageFiles: string[]
  swiperIndex: number
}

export default function GalleryModal({
  isOpen,
  onClose,
  imageFiles,
  swiperIndex,
}: GalleryModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SwiperComponent slideList={imageFiles} swiperIndex={swiperIndex} />
    </Modal>
  )
}
