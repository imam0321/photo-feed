"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal()
    }
  }, [])

  const onHide = () => {
    router.back()
  }

  return createPortal(
    <dialog
      onClick={onHide}
      ref={modalRef}
      className="shadow-gray-600 shadow-md border border-gray-400 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHide}
        className="flex justify-end cursor-pointer">
        <Image
          src="/icons/xmark.svg"
          alt="close"
          width={30}
          height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")

  )
}
