import Poster from "../components/poster/Poster"
import Greeting from "../components/greeting/Greeting"
import Gallery from "../components/gallery/Gallery"
import Location from "../components/location/Location"
import Account from "../components/account/Account"
import Bottom from "../components/bottom/Bottom"

// app/posts/page.ts
type Props = {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}

// const mainImageFiles = [
//   "/snaps/photo/1_2_04.JPG",
//   "/snaps/photo/1_3_04.JPG",
//   "/snaps/photo/1_4_04.JPG",
//   "/snaps/photo/1_5_04.JPG",
//   "/snaps/photo/1_8_01_2.JPG",
//   "/snaps/photo/1_11_01.JPG",
//   "/snaps/photo/1_11_03.JPG",
//   "/snaps/photo/2_3_03.JPG",
//   "/snaps/photo/3_1_01.JPG",
//   "/snaps/photo/3_1_17.JPG",
// ]
// const imageFiles = [
//   "/snaps/photo/1_1_02.JPG",
//   "/snaps/photo/1_1_05.JPG",
//   "/snaps/photo/1_2_03.JPG",
//   "/snaps/photo/1_2_04.JPG",
//   "/snaps/photo/1_3_04.JPG",
//   "/snaps/photo/1_3_06.JPG",
//   "/snaps/photo/1_4_02.JPG",
//   "/snaps/photo/1_4_04.JPG",
//   "/snaps/photo/1_5_01.JPG",
//   "/snaps/photo/1_5_04.JPG",
//   "/snaps/photo/1_6_06.JPG",
//   "/snaps/photo/1_6_10.JPG",
//   "/snaps/photo/1_7_04.JPG",
//   "/snaps/photo/1_8_01_2.JPG",
//   "/snaps/photo/1_9_02.JPG",
//   "/snaps/photo/1_10_03.JPG",
//   "/snaps/photo/1_11_01.JPG",
//   "/snaps/photo/1_11_03.JPG",
//   "/snaps/photo/1_11_09.JPG",
//   "/snaps/photo/1_11_11.JPG",
//   "/snaps/photo/2_1_01.JPG",
//   "/snaps/photo/2_1_07.JPG",
//   "/snaps/photo/2_1_13.JPG",
//   "/snaps/photo/2_2_10.JPG",
//   "/snaps/photo/2_3_03.JPG",
//   "/snaps/photo/2_3_06.JPG",
//   "/snaps/photo/2_5_07.JPG",
//   "/snaps/photo/2_6_01.JPG",
//   "/snaps/photo/2_6_06.JPG",
//   "/snaps/photo/3_1_01.JPG",
//   "/snaps/photo/3_1_02.JPG",
//   "/snaps/photo/3_1_17.JPG",
//   "/snaps/photo/3_2_03.JPG",
//   "/snaps/photo/4_1_01.JPG",
//   "/snaps/photo/4_2_01.JPG",
//   "/snaps/photo/4_3_01.JPG",
//   "/snaps/photo/4_4_01.JPG",
//   "/snaps/photo/4_5_01.JPG",
//   "/snaps/photo/4_6_02.JPG",
//   "/snaps/photo/4_7_01.JPG",
//   "/snaps/photo/4_7_02.JPG",
//   "/snaps/photo/4_8_01.JPG",
// ]

const mainImageFiles = [
  "/snaps/temp/01.jpg",
  "/snaps/temp/02.jpg",
  "/snaps/temp/03.jpg",
  "/snaps/temp/04.jpg",
  "/snaps/temp/05.jpg",
  "/snaps/temp/06.jpg",
]

const imageFiles = [
  "/snaps/temp/01.jpg",
  "/snaps/temp/02.jpg",
  "/snaps/temp/03.jpg",
  "/snaps/temp/04.jpg",
  "/snaps/temp/05.jpg",
  "/snaps/temp/06.jpg",
  "/snaps/temp/07.jpg",
  "/snaps/temp/08.jpg",
  "/snaps/temp/09.jpg",
  "/snaps/temp/10.jpg",
  "/snaps/temp/11.jpg",
  "/snaps/temp/12.jpg",
  "/snaps/temp/13.jpg",
  "/snaps/temp/14.jpg",
  "/snaps/temp/15.jpg",
  "/snaps/temp/16.jpg",
  "/snaps/temp/17.jpg",
  "/snaps/temp/18.jpg",
]

export default function Invitation(props: Props) {
  const { searchParams } = props
  const pageType = searchParams.type
  const randomNumber = searchParams.r

  return (
    <div id="app">
      <div className="ml-auto mr-auto">
        <Poster
          pageType={pageType}
          imageList={mainImageFiles}
          randomNumber={randomNumber}
        />
        <Greeting />
        <Gallery pageType={pageType} imageList={imageFiles} />
        <Location />
        <Account />
        <Bottom />
      </div>
    </div>
  )
}
