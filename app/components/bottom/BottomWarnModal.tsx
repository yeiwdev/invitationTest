import Image from "next/image"
import Modal from "../Modal"

export default function BottomWarnModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white">
        <h3 className="text-center text-3xl pt-3 pb-3">예식장 안내</h3>
        <div
          className="text-center pt-4 pb-4 pl-4 pr-4"
          style={{ lineHeight: "2rem" }}
        >
          예식장 이름은
          <b className="text-2xl text-blue-500">교수회관</b>입니다. <br />
          <b className="text-2xl text-red-500">호암 교수회관</b>이 아닙니다.{" "}
          <br />
          <b className="text-lg text-red-500">연구공원</b>,
          <b className="text-lg text-red-500">이라운지</b>도 아닙니다.
          <ul className="weddinghall_list">
            <li className="relative">
              <Image
                src="/images/img_snufacultyclub.png"
                alt="snufacultyclub"
                width={100}
                height={100}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="relative">
              <Image
                src="/images/img_hoam.png"
                alt="snufacultyclub"
                width={100}
                height={100}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ef4444"
                viewBox="0 0 200 200"
              >
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </li>
            <li className="relative">
              <Image
                src="/images/img_snuwedding.png"
                alt="snufacultyclub"
                width={100}
                height={100}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ef4444"
                viewBox="0 0 200 200"
              >
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </li>
            <li className="relative">
              <Image
                src="/images/img_elounge.png"
                alt="snufacultyclub"
                width={100}
                height={100}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ef4444"
                viewBox="0 0 200 200"
              >
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}
