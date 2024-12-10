"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import useScript from "../hooks/useScript"
import Modal from "../components/Modal"
import SwiperComponent from "../components/SwiperComponent"

declare const Sakura: any

const imageFiles = [
  "/snaps/photo/1_2_04.JPG",
  "/snaps/photo/1_3_04.JPG",
  "/snaps/photo/1_4_04.JPG",
  "/snaps/photo/1_5_04.JPG",
  "/snaps/photo/1_8_01.JPG",
  "/snaps/photo/1_11_01.JPG",
  "/snaps/photo/1_11_03.JPG",
  "/snaps/photo/2_3_03.JPG",
  "/snaps/photo/3_1_01.JPG",
  "/snaps/photo/3_1_17.JPG",
]

export default function Invitaions() {
  const status = useScript("./lib/sakura.min.js")

  useEffect(() => {
    if (status === "ready2") {
      if (typeof Sakura !== `undefined`) {
        const sakura = new Sakura("#scroll_wrap", {
          fallSpeed: 2,
          delay: 500,
          colors: [
            {
              gradientColorStart: "rgba(167, 185, 74, 0.8)",
              gradientColorEnd: "rgba(159, 179, 54, 0.8)",
              gradientColorDegree: 120,
            },
            {
              gradientColorStart: "rgba(118, 134, 38, 0.8)",
              gradientColorEnd: "rgba(119, 129, 70, 0.8)",
              gradientColorDegree: 120,
            },
            {
              gradientColorStart: "rgba(203, 228, 75, 0.8)",
              gradientColorEnd: "rgba(215, 232, 126, 0.8)",
              gradientColorDegree: 120,
            },
          ],
        })

        if (sakura === null) {
          console.log("T.T")
        }
      }
    }
  }, [status])

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [isContactOpen, setIsContactModalOpen] = useState(false)
  const [swiperIndex, setSwiperIndex] = useState(0)
  const [accountFirst, setAccountFirst] = useState(false)
  const [accountSecond, setAccountSecond] = useState(false)

  const openPhotoModal = (index: number) => {
    setIsPhotoModalOpen(true)
    setSwiperIndex(index)
  }

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false)
  }

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  const openLocationModal = () => {
    setIsLocationModalOpen(true)
  }

  const closeLocationModal = () => {
    setIsLocationModalOpen(false)
  }

  // 현재 URL을 클립보드에 복사하고 알림
  const handleCopyURL = (value: string, message: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        // .writeText(window && window.location.href)
        .then(() => {
          alert(`${message}가 복사되었습니다.`)
        })
        .catch(() => {
          alert(`복사를 다시 시도해주세요.`)
        })
    }
  }

  const handleShareURLKakao = () => {
    const { Kakao, location } = window
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    })
  }

  return (
    <div id="app" className="invitations">
      <div id="scroll_wrap">
        <section>
          <div className="relative">
            <img className="w-full" src="/snaps/photo/1_2_04.JPG" />
            <img
              className="absolute top-0 left-2/4 w-ful"
              style={{
                transform: "translateX(-50%)",
                marginLeft: "10px",
                marginTop: "-20px",
              }}
              src="/images/poster/poster_frame.png"
            />
          </div>
          <div className="max-w-iph12 w-11/12 mr-auto ml-auto mt-5 flex items-center justify-center">
            <img
              className="relative "
              style={{ height: "50px", right: "-25px" }}
              src="/images/poster/ji.png"
            />
            <img
              className="relative"
              style={{ height: "50px" }}
              src="/images/poster/heart.png"
            />
            <img
              className="relative "
              style={{ height: "50px", left: "-27px" }}
              src="/images/poster/yi.png"
            />
          </div>
          <div className="relative ml-auto mr-auto pt-3 w-11/12 max-w-iph12 px-2">
            <img
              className="ml-auto mr-auto"
              src="/images/poster/dateinfo.png"
              style={{ height: "21px" }}
            />

            <img
              className="ml-auto mr-auto mt-2"
              src="/images/poster/locationinfo.png"
              style={{ height: "21px" }}
            />
          </div>

          <button
            type="button"
            className="relative flex items-center justify-center ml-auto mr-auto mt-3.5 w-11/12 max-w-iph12"
            aria-label="Location modal"
            onClick={() => {
              openLocationModal()
            }}
          >
            <img style={{ height: "49px" }} src="/images/poster/btnmap.png" />
          </button>
        </section>
        <section className="pt-28">
          <div className="relative max-w-iph12 w-10/12 ml-auto mr-auto">
            <img
              className="absolute"
              style={{ top: "-67px", left: "4px" }}
              src="/images/greetings/stickers.png"
            />
            <img
              className=""
              style={{ maxWidth: "calc(100% + 30px)", marginLeft: "-15px" }}
              src="/images/greetings/contents.png"
            />
          </div>

          <ul style={{ color: "#665e62" }}>
            <li className="flex text-base items-center justify-center text-wrap h-10">
              <b>(故)박두현</b>&nbsp;&nbsp;·&nbsp;&nbsp;<b>김난희</b>
              &nbsp;의&nbsp;&nbsp;&nbsp;아들&nbsp;&nbsp;&nbsp;
              <b>지영</b>
              <button
                type="button"
                aria-label="call"
                className="relative ml-2"
                style={{ top: "-6px" }}
              >
                <Link
                  href="tel:01096617434"
                  className="flex items-center justify-center ml-auto mr-auto mt-3.5 w-7"
                  style={{
                    backgroundColor: "#d5dde8",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ position: "relative", top: "1px" }}
                  >
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </button>
            </li>
            <li className="flex text-base items-center justify-center text-wrap h-10">
              <b>우택열</b>&nbsp;&nbsp;·&nbsp;&nbsp;<b>변영옥</b>
              &nbsp;의&nbsp;&nbsp;&nbsp;딸&nbsp;&nbsp;&nbsp;<b>예인</b>
              <button
                type="button"
                aria-label="call"
                className="relative ml-2"
                style={{ top: "-6px" }}
              >
                <Link
                  href="tel:01031265389"
                  className="flex items-center justify-center ml-auto mr-auto mt-3.5 w-7"
                  style={{
                    backgroundColor: "#d5dde8",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ position: "relative", top: "1px" }}
                  >
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="relative block ml-auto mr-auto w-10/12 max-w-iph12"
            aria-label="More"
            onClick={() => {
              openContactModal()
            }}
          >
            <img
              src="/images/greetings/btn_contact_more.png"
              className="ml-auto mr-auto"
              style={{ height: "72px" }}
            />
          </button>

          <p className="text-center pt-10 pb-10 text-stone-700 text-xs">
            축하 화환은 정중히 사양합니다.
            <br /> 감사한 마음만 받겠습니다.
          </p>
        </section>
        <section className="pt-24">
          <div className="relative max-w-iph12 w-10/12 ml-auto mr-auto">
            <img src="/images/date/stickers.png" />
            <img
              className=""
              style={{ maxWidth: "calc(100% + 30px)", marginLeft: "-7px" }}
              src="/images/date/contents.png"
            />
          </div>
        </section>
        <section className="pt-24 pl-4 pr-4">
          <h5 className="w-10/12 ml-auto mr-auto">
            <img src="/images/gallery/title.png" />
          </h5>
          <ul className="flex flex-wrap flex-col gallery mt-4">
            {imageFiles.map((item, index) => (
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
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-24 pl-4 pr-4">
          <h5 className="w-10/12 ml-auto mr-auto">
            <img src="/images/location/title.png" />
          </h5>
          <img
            className="ml-auto mr-auto mb-7 w-full"
            style={{ width: "360px" }}
            src="/images/location/map.png"
          />
          <img
            className="ml-auto mr-auto mb-10 w-full"
            style={{ width: "380px" }}
            src="/images/location/contents.png"
          />
        </section>
        <section className="bg-white">
          <h5 className="text-center text-lg tracking-wider text-zinc-400 pt-8 mb-7">
            마음 전하실 곳
          </h5>
          <div className="pb-10">
            <button
              type="button"
              className="w-10/12 max-w-iph12 h-12 mr-auto ml-auto block bg-neutral-100 text-neutral-900 rounded"
              onClick={() => {
                setAccountFirst(!accountFirst)
              }}
            >
              신랑측 계좌번호
            </button>
            {accountFirst ? (
              <ul className="pt-8">
                <li>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <div className="font-bold">박지영</div>
                    <div>하나은행</div>
                    <Link href="850-910159-17707">850-910159-17707</Link>
                  </div>
                  <div className="flex justify-center items-center gap-x-2.5 mt-2">
                    <button
                      type="button"
                      className="block bg-neutral-100 text-neutral-900 rounded h-8 pl-2 pr-2"
                      onClick={() => {
                        handleCopyURL("850-910159-17707", "계좌번호")
                      }}
                    >
                      계좌번호 복사하기
                    </button>
                    <Link
                      aria-label="kakao pay"
                      className="flex items-center rounded h-8 pl-2 pr-2"
                      style={{ backgroundColor: "#ffe500" }}
                      href="https://qr.kakaopay.com/Ej7lbrBzU"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1"
                        viewBox="0 0 2000 616"
                        stroke="currentColor"
                        className="h-3"
                      >
                        <path
                          d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z"
                          transform="matrix(.1 0 0 -.1 0 616)"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mt-8">
                  <div className="flex justify-center items-center gap-x-1.5">
                    <div className="font-bold">김난희</div>
                    <div>하나은행</div>
                    <Link href="850-910159-17707">850-910159-17707</Link>
                  </div>
                  <div className="flex justify-center items-center gap-x-2.5 mt-2">
                    <button
                      type="button"
                      className="block bg-neutral-100 text-neutral-900 rounded h-8 pl-2 pr-2"
                      onClick={() => {
                        handleCopyURL("850-910159-17707", "계좌번호")
                      }}
                    >
                      계좌번호 복사하기
                    </button>
                    <Link
                      aria-label="kakao pay"
                      className="flex items-center rounded h-8 pl-2 pr-2"
                      style={{ backgroundColor: "#ffe500" }}
                      href="https://qr.kakaopay.com/Ej7lbrBzU"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1"
                        viewBox="0 0 2000 616"
                        stroke="currentColor"
                        className="h-3"
                      >
                        <path
                          d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z"
                          transform="matrix(.1 0 0 -.1 0 616)"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}

            <button
              type="button"
              className="w-10/12 max-w-iph12 h-12 mr-auto ml-auto mt-8 block bg-neutral-100 text-neutral-900 rounded"
              onClick={() => {
                setAccountSecond(!accountSecond)
              }}
            >
              신부측 계좌번호
            </button>
            {accountSecond ? (
              <ul className="pt-8 pb-8">
                <li>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <div className="font-bold">우예인</div>
                    <div>하나은행</div>
                    <Link href="850-910159-17707">850-910159-17707</Link>
                  </div>
                  <div className="flex justify-center items-center gap-x-2.5 mt-2">
                    <button
                      type="button"
                      className="block bg-neutral-100 text-neutral-900 rounded h-8 pl-2 pr-2"
                      onClick={() => {
                        handleCopyURL("850-910159-17707", "계좌번호")
                      }}
                    >
                      계좌번호 복사하기
                    </button>
                    <Link
                      aria-label="kakao pay"
                      className="flex items-center rounded h-8 pl-2 pr-2"
                      style={{ backgroundColor: "#ffe500" }}
                      href="https://qr.kakaopay.com/Ej7lbrBzU"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1"
                        viewBox="0 0 2000 616"
                        stroke="currentColor"
                        className="h-3"
                      >
                        <path
                          d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z"
                          transform="matrix(.1 0 0 -.1 0 616)"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mt-8">
                  <div className="flex justify-center items-center gap-x-1.5">
                    <div className="font-bold">우택열</div>
                    <div>하나은행</div>
                    <Link href="850-910159-17707">850-910159-17707</Link>
                  </div>
                  <div className="flex justify-center items-center gap-x-2.5 mt-2">
                    <button
                      type="button"
                      className="block bg-neutral-100 text-neutral-900 rounded h-8 pl-2 pr-2"
                      onClick={() => {
                        handleCopyURL("850-910159-17707", "계좌번호")
                      }}
                    >
                      계좌번호 복사하기
                    </button>
                    <Link
                      aria-label="kakao pay"
                      className="flex items-center rounded h-8 pl-2 pr-2"
                      style={{ backgroundColor: "#ffe500" }}
                      href="https://qr.kakaopay.com/Ej7lbrBzU"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1"
                        viewBox="0 0 2000 616"
                        stroke="currentColor"
                        className="h-3"
                      >
                        <path
                          d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z"
                          transform="matrix(.1 0 0 -.1 0 616)"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mt-8">
                  <div className="flex justify-center items-center gap-x-1.5">
                    <div className="font-bold">변영옥</div>
                    <div>하나은행</div>
                    <Link href="850-910159-17707">850-910159-17707</Link>
                  </div>
                  <div className="flex justify-center items-center gap-x-2.5 mt-2">
                    <button
                      type="button"
                      className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                      onClick={() => {
                        handleCopyURL("850-910159-17707", "계좌번호")
                      }}
                    >
                      계좌번호 복사하기
                    </button>
                    <Link
                      aria-label="kakao pay"
                      className="flex items-center rounded h-8 pl-2 pr-2"
                      style={{ backgroundColor: "#ffe500" }}
                      href="https://qr.kakaopay.com/Ej7lbrBzU"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1"
                        viewBox="0 0 2000 616"
                        stroke="currentColor"
                        className="h-3"
                      >
                        <path
                          d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z"
                          transform="matrix(.1 0 0 -.1 0 616)"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </section>

        <section className="flex bg-neutral-100 items-center justify-around pt-10 pb-10">
          <button
            type="button"
            aria-label="공유하기"
            onClick={() => {
              handleCopyURL(window && window.location.href, "링크")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-50"
            >
              <path
                d="M16.4481 1.50023C14.844 1.4862 13.3007 2.10727 12.15 3.22645L12.1351 3.24107L11.6464 3.7298C11.2559 4.12032 11.2559 4.75349 11.6464 5.14401L12.3535 5.85112C12.7441 6.24164 13.3772 6.24164 13.7677 5.85112L14.2484 5.37048C14.834 4.80437 15.6142 4.49305 16.4218 4.50012C17.2326 4.50721 18.0103 4.83463 18.5868 5.41517C19.1637 5.99606 19.4927 6.78402 19.4998 7.60991C19.5069 8.43176 19.1946 9.22174 18.633 9.81182L15.5209 12.9432C15.2056 13.2609 14.8269 13.5058 14.4107 13.6622C13.9945 13.8185 13.5501 13.8828 13.1076 13.8509C12.6651 13.8189 12.2341 13.6915 11.8438 13.4768C11.7456 13.4228 11.6504 13.3635 11.5588 13.2993C11.1066 12.9823 10.4859 12.8717 10.0425 13.201L9.23978 13.7973C8.79642 14.1266 8.69902 14.7603 9.09601 15.1443C9.48444 15.52 9.9219 15.8435 10.3977 16.1053C11.1664 16.5282 12.0171 16.78 12.8918 16.8431C13.7666 16.9062 14.6444 16.779 15.4656 16.4706C16.2868 16.1621 17.0317 15.6797 17.65 15.0568L20.7712 11.9162L20.7898 11.8971C21.9007 10.7389 22.5136 9.18987 22.4997 7.58402C22.4859 5.97817 21.8463 4.43996 20.7155 3.30127C19.5844 2.16225 18.0521 1.51427 16.4481 1.50023Z"
                fill="#000000"
              />
              <path
                d="M11.1082 7.15685C10.2334 7.09376 9.35555 7.22089 8.53436 7.52937C7.71347 7.83773 6.96821 8.32053 6.34994 8.94317L3.22873 12.0838L3.21011 12.1029C2.09928 13.261 1.48637 14.8101 1.50023 16.416C1.51409 18.0218 2.15365 19.56 3.28441 20.6987C4.41551 21.8377 5.94781 22.4857 7.55185 22.4997C9.15591 22.5138 10.6993 21.8927 11.85 20.7735L11.8648 20.7589L12.3536 20.2701C12.7441 19.8796 12.7441 19.2465 12.3536 18.8559L11.6464 18.1488C11.2559 17.7583 10.6228 17.7583 10.2322 18.1488L9.75155 18.6295C9.16598 19.1956 8.38576 19.5069 7.5781 19.4999C6.76732 19.4928 5.98963 19.1653 5.41313 18.5848C4.83629 18.0039 4.50725 17.216 4.50012 16.3901C4.49303 15.5682 4.80532 14.7782 5.36694 14.1881L8.47904 11.0567C8.79434 10.7391 9.1731 10.4941 9.58932 10.3378C10.0055 10.1814 10.4498 10.1172 10.8924 10.1491C11.3349 10.181 11.7659 10.3084 12.1561 10.5231C12.2544 10.5772 12.3495 10.6365 12.4411 10.7007C12.8934 11.0177 13.5141 11.1282 13.9574 10.7989L14.7602 10.2026C15.2036 9.87328 15.301 9.23958 14.904 8.85563C14.5155 8.47995 14.0781 8.15644 13.6022 7.89464C12.8335 7.47172 11.9829 7.21993 11.1082 7.15685Z"
                fill="#000000"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="카카오톡으로 공유하기"
            className="opacity-50"
            onClick={handleShareURLKakao}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z" />
              </g>
            </svg>
          </button>
        </section>
      </div>

      <div>
        <Modal isOpen={isPhotoModalOpen} onClose={closePhotoModal}>
          <SwiperComponent slideList={imageFiles} swiperIndex={swiperIndex} />
        </Modal>

        <Modal isOpen={isContactOpen} onClose={closeContactModal}>
          <div className="bg-white">
            <div className="flex pt-10 pb-10 ml-auto mr-auto max-w-iph12">
              <div className="flex-auto w-50 text-center">
                <h5 className="mt-9 mb-9 text-sm text-zinc-600">
                  신랑 측 혼주
                </h5>
                <dl>
                  <dt className="text-base flex items-center justify-center">
                    <span className="block mr-1 text-sm">어머니</span>김난희
                  </dt>
                  <dd>
                    <Link
                      href="tel:01020647344"
                      className="block ml-auto mr-auto mt-3.5 w-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="26px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                          fill="#d7d4cc"
                        />
                      </svg>
                    </Link>
                  </dd>
                </dl>
              </div>
              <div className="flex-auto w-50 text-center">
                <h5 className="mt-9 mb-9 text-sm text-zinc-600">
                  신부 측 혼주
                </h5>
                <dl>
                  <dt className="text-base flex items-center justify-center">
                    <span className="block mr-1 text-sm">아버지</span>우택열
                  </dt>
                  <dd>
                    <Link
                      href="tel:01053755389"
                      className="block ml-auto mr-auto mt-3.5 w-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="26px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                          fill="#d7d4cc"
                        />
                      </svg>
                    </Link>
                  </dd>
                  <dt className="text-base flex items-center justify-center mt-4">
                    <span className="block mr-1 text-sm">어머니</span>변영옥
                  </dt>
                  <dd>
                    <Link
                      href="tel:01077515389"
                      className="block ml-auto mr-auto mt-3.5 w-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26px"
                        height="26px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                          fill="#d7d4cc"
                        />
                      </svg>
                    </Link>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isLocationModalOpen}
          onClose={closeLocationModal}
          className="location"
        >
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
      </div>
    </div>
  )
}
