interface PosterProps {
  pageType?: string | string[] | undefined
  imageList: string[]
  randomNumber?: string | string[] | undefined
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}
