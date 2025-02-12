import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/lws_logo.png"
          alt="Lws"
          width={165}
          height={100}
        />
      </Link>
    </>
  )
}
