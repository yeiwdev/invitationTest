"use client"

import Link from "next/link"
import { useState } from "react"
import HandleCopyURL from "../../utils/handleCopyURL"

export default function Account() {
  const [accountFirst, setAccountFirst] = useState(false)
  const [accountSecond, setAccountSecond] = useState(false)

  return (
    <section className="bg-white">
      <h5 className="text-center text-lg tracking-wider text-zinc-400 pt-8 mb-7">
        마음 전하실 곳
      </h5>
      <div className="pb-10">
        <button
          type="button"
          className="w-10/12 max-w-iph12 h-12 mr-auto ml-auto block bg-neutral-200 text-neutral-900 rounded"
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
                <div className="font-bold">이준서</div>
                <div>하나은행</div>
                <Link href="123-123-13450123">123-123-13450123</Link>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 mt-2">
                <button
                  type="button"
                  className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                  onClick={() => {
                    HandleCopyURL("123-123-13450123", "계좌번호")
                  }}
                >
                  계좌번호 복사하기
                </button>
                <Link
                  aria-label="kakao pay"
                  className="flex items-center rounded h-8 pl-2 pr-2"
                  style={{ backgroundColor: "#ffe500" }}
                  href="/invitation"
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
                <div className="font-bold">김영희</div>
                <div>국민은행</div>
                <Link href="123-123-13450123">123-123-13450123</Link>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 mt-2">
                <button
                  type="button"
                  className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                  onClick={() => {
                    HandleCopyURL("123-123-13450123", "계좌번호")
                  }}
                >
                  계좌번호 복사하기
                </button>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}

        <button
          type="button"
          className="w-10/12 max-w-iph12 h-12 mr-auto ml-auto mt-8 block bg-neutral-200 text-neutral-900 rounded"
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
                <div className="font-bold">김은재</div>
                <div>하나은행</div>
                <Link href="123-123-13450123">123-123-13450123</Link>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 mt-2">
                <button
                  type="button"
                  className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                  onClick={() => {
                    HandleCopyURL("123-123-13450123", "계좌번호")
                  }}
                >
                  계좌번호 복사하기
                </button>
                <Link
                  aria-label="kakao pay"
                  className="flex items-center rounded h-8 pl-2 pr-2"
                  style={{ backgroundColor: "#ffe500" }}
                  href="/invitation"
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
                <div className="font-bold">한희승</div>
                <div>카카오뱅크</div>
                <Link href="123-123-13450123">123-123-13450123</Link>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 mt-2">
                <button
                  type="button"
                  className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                  onClick={() => {
                    HandleCopyURL("123-123-13450123", "계좌번호")
                  }}
                >
                  계좌번호 복사하기
                </button>
              </div>
            </li>
            <li className="mt-8">
              <div className="flex justify-center items-center gap-x-1.5">
                <div className="font-bold">최수연</div>
                <div>농협은행</div>
                <Link href="123-123-13450123">123-123-13450123</Link>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 mt-2">
                <button
                  type="button"
                  className="block bg-neutral-200 text-neutral-900 rounded h-8 pl-2 pr-2"
                  onClick={() => {
                    HandleCopyURL("123-123-13450123", "계좌번호")
                  }}
                >
                  계좌번호 복사하기
                </button>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}
