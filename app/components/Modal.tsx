import React from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 w-screen h-dvh z-30 ${className || ``}`}
    >
      <div className="w-11/12 max-w-iph12 relative pt-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 text-zinc-300"
          aria-label="closeButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="currentColor"
          >
            <g id="Frame 9">
              <path
                id="Path"
                d="M25.5 10.5L10.5 25.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
              <path
                id="Path_2"
                d="M10.5 10.5L25.5 25.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
