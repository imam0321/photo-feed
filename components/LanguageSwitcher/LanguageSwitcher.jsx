"use client";

import Image from "next/image";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const languages = [
    {
      'code': 'en',
      'language': 'English'
    },
    {
      'code': 'bn',
      'language': 'Bangla'
    }
  ]

  const found = languages.find(lang => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = lang => {
    setSelectedLanguage({ ...selectedLanguage, code: lang, language: lang === 'en' ? 'English' : 'Bangla' });
    setShowMenu(false);
    router.push(`/${lang}`)
  }


  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-8"
            src={selectedLanguage.code === "bn" ? "/images/bd.png" : "/images/usa.png"}
            alt={selectedLanguage.language}
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {
              languages.map(entry => (
                <li
                  key={entry.code}
                  onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <Image
                    className="max-w-8"
                    src={entry.code === "bn" ? "/images/bd.png" : "/images/usa.png"}
                    alt="bangla"
                    height={100}
                    width={165}
                  />
                  {entry.language}
                </li>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}
