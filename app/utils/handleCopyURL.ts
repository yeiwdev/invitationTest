// 현재 URL을 클립보드에 복사하고 알림
export default function HandleCopyURL(value: string, message: string) {
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
