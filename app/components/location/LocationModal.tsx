import Link from "next/link"
import Image from "next/image"
import Modal from "../Modal"

export default function LocationModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="location">
      <Link
        href="https://map.kakao.com/link/to/교수회관,37.457414,126.954494"
        target="_blank"
        className="flex items-center justify-center w-10/12 h-12 ml-auto mr-auto mt-4 bg-neutral-100 text-neutral-900 rounded gap-2"
      >
        <Image
          src="/icon/map_kakao.png"
          alt="map kakao"
          className="rounded-lg"
          width={30}
          height={30}
        />
        카카오지도로 열기
      </Link>
      <Link
        href="http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=37.457414&elng=126.954494&etitle=교수회관"
        target="_blank"
        className="flex items-center justify-center w-10/12 h-12 ml-auto mr-auto mt-4 bg-neutral-100 text-neutral-900 rounded gap-2"
      >
        <Image
          src="/icon/map_naver.png"
          alt="map kakao"
          className="rounded-lg"
          width={30}
          height={30}
        />
        네이버지도로 열기
      </Link>
    </Modal>
  )
}
