import LocationButton from "./LocationButton"

export default function Location() {
  return (
    <section className="bg-white">
      <h5 className="text-center text-lg tracking-wider text-zinc-400 pt-8 mb-7">
        LOCATION
      </h5>
      <img
        className="ml-auto mr-auto"
        style={{ width: "330px" }}
        src="/images/location/map_3.png"
      />
      <LocationButton />
      <div className="ml-auto mr-auto mb-10 w-10/12 max-w-iph12">
        <h2 className="text-lg pt-4 mb-4 font-bold text-stone-900">자가용</h2>
        <ul className="mb-12 list_wrap text-zinc-600">
          <li className="relative text-sm pl-3">
            내비게이션 :{" "}
            <b>
              <em style={{ backgroundColor: "rgba(215, 208, 186, 0.6)" }}>
                &lsquo;서울대학교 교수회관&rsquo;
              </em>
            </b>{" "}
            또는 <b>&lsquo;서울대학교 학군단&rsquo;</b>{" "}
          </li>
          <li className="relative text-sm pl-3 mt-2">
            <b>
              <em style={{ backgroundColor: "rgba(215, 208, 186, 0.6)" }}>
                낙성대 근처의{" "}
                <span className="text-red-500 font-bold">
                  &quot;호암교수회관&quot; 아닙니다.
                </span>
              </em>
            </b>{" "}
          </li>
          <li className="relative text-sm pl-3 mt-2">
            <b>서울대입구역</b>, <b>낙성대역</b>에서 택시로 5~10분 소요{" "}
          </li>
          <li className="relative text-sm pl-3 mt-2">
            서울대 후문으로 진입 시, 기숙사 삼거리에서 좌회전 후 400m
            올라오십시오.
          </li>
          <li className="relative text-sm pl-3 mt-2">
            서울대 정문으로 진입 시, 기숙사 삼거리에서 오른쪽으로 400m
            올라오십시오.{" "}
          </li>
          <li className="relative text-sm pl-3 mt-2">2시간 무료 주차권 지급</li>
        </ul>
      </div>
      <div
        className="ml-auto mr-auto pb-10 w-10/12 max-w-iph12"
        style={{ color: "#63614e" }}
      >
        <h2 className="text-lg mt-4 mb-4 font-bold text-stone-900">
          대중교통(환승, 하차 시 약도 참조)
        </h2>
        <ul className="mb-12 list_wrap text-zinc-600">
          <li className="relative text-sm pl-3">
            <span className="text-nowrap">2호선 낙성대역(4번출구)</span> ➡{" "}
            <span className="text-nowrap">GS 주유소끼고 좌회전</span> ➡{" "}
            <span className="text-nowrap">
              제과점(장블랑제리) 앞에서 마을버스 2번
            </span>
            ➡ <span className="text-nowrap">&lsquo;노천강당&rsquo; </span> 또는{" "}
            <span className="text-nowrap">
              {" "}
              &lsquo;기초과학공동기기원, 교수회관&rsquo; 정류장에서 하차
            </span>
          </li>
          <li className="relative text-sm pl-3 mt-2">
            <span className="text-nowrap">2호선 서울대입구역(3번출구)</span> ➡{" "}
            <span className="text-nowrap">5511버스</span> ➡{" "}
            <span className="text-nowrap">
              &lsquo;기초과학공동기기원, 교수회관&rsquo; 정류장에서 하차
            </span>
          </li>
          <li className="relative text-sm pl-3 mt-2">
            <span className="text-nowrap">신림선 관악산역(1번출구)</span> ➡{" "}
            <span className="text-nowrap">5516버스</span> ➡{" "}
            <span className="text-nowrap">
              &lsquo;기초과학공동기기원&rsquo; 정류장에서 하차
            </span>
          </li>
          <li className="relative text-sm pl-3 mt-2">
            <span className="text-nowrap">관악산역(1번출구)</span> ➡{" "}
            <span className="text-nowrap">5516버스</span> ➡{" "}
            <span className="text-nowrap">
              &lsquo;기초과학공동기기원&rsquo; 정류장에서 하차
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
