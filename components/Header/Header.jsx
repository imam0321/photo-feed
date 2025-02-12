import Image from 'next/image'
import Link from 'next/link'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'

export const Header = () => {

  return (
    <nav className="py-3 md:py-5 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Link href='/' className="flex items-center text-2xl font-bold gap-2">
          <Image width={32} height={32} src="/images/bd.png" alt="bangla" />
          Photo Feed
        </Link>
        <LanguageSwitcher/>
      </div>
    </nav>
  )
}
