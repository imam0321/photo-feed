import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image height={100} width={165} src="/lws_logo.png" alt="Lws" />
      </Link>
    </>
  )
}
