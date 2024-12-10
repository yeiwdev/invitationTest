"use client"

import { useEffect, useState } from "react"

export default function useScript(url: string) {
  const [status, setStatus] = useState(url ? "loading" : "idle")

  useEffect(() => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    script.setAttribute("data-status", "loading")
    document.body.appendChild(script)

    const setStateFromEvent = (event: { type: string }) => {
      setStatus(event.type === "load" ? "ready" : "error")
    }

    // Add event listeners
    script.addEventListener("load", setStateFromEvent)
    script.addEventListener("error", setStateFromEvent)

    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent)
        script.removeEventListener("error", setStateFromEvent)
      }
    }
  }, [])

  return status
}
