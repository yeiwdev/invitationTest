"use client"

import Script from "next/script"

declare const Sakura: any

export default function SakuraScript() {
  function onLoad() {
    if (typeof Sakura !== `undefined`) {
      const sakura = new Sakura("#sakura_bg", {
        fallSpeed: 3,
        delay: 600,
        minSize: 5,
      })

      if (sakura === null) {
        console.log(`T.T`)
      }
    }
  }

  return <Script src="./lib/sakura.min.js" async onLoad={onLoad} />
}
