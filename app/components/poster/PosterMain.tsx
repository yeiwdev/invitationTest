"use client"

import { useEffect, useState } from "react"

interface PosterMainProps {
  src: string
}

export default function Poster({ src }: PosterMainProps) {
  const [postType, setPostType] = useState(``)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setPostType(urlParams.get("type") as string)
  }, [])
  return <img src={src} alt="snap poster" className="w-full h-auto" />
}
