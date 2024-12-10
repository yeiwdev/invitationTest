export default function HandleModifyImage(imageArray: string[]) {
  const modifiedImageFiles = imageArray
    .map((image) => {
      // 1_3_04, 1_11_01, 1_11_03 에 해당하는 파일명을 _p로 변경
      if (image.includes("1_3_04")) {
        return image.replace("1_3_04", "1_3_04_p")
      } else if (image.includes("1_11_01")) {
        return image.replace("1_11_01", "1_11_01_p")
      } else if (image.includes("1_11_03")) {
        return image.replace("1_11_03", "1_11_03_p")
      }
      return image
    })
    .filter(
      (image) =>
        !image.includes("1_8_01") &&
        !image.includes("1_11_09") &&
        !image.includes("1_11_11")
    )

  return modifiedImageFiles
}
