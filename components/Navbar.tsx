'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { links } from '@/util'
import Image from 'next/image'
import { ChevronDown, MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="flex border p-2 px-4 justify-between items-center rounded-full bg-[#F2F4F7]">
        <Link href="/">
          <Image src="/images/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <div className={`${isOpen ? 'translate-x-0' : '-translate-x-[500px]'} lg:translate-x-0 transition-all duration-300 fixed w-1/2 overflow-hidden p-4 lg:p-0 h-screen lg:h-auto bg-[#F2F4F7] lg:w-auto top-0 left-0 z-50 lg:static flex flex-col lg:flex-row text-sm gap-6`}>
          {
            links.map((link, index) => (
              <Link key={index} className="flex text-gray-500 items-center gap-2" href="/dashboard">{link.name} {link.drop && <ChevronDown size={12} />} </Link>
            ))
          }

          <div className="lg:hidden flex flex-col gap-4">
            <Button variant="outline" size="rd">
              Talk to sales
            </Button>
            <Button variant="blue" size="rd">
              Sign up for free
            </Button>
          </div>

          <Link href="/" className='lg:hidden absolute bottom-4'>
          <Image src="/images/logo.png" width={100} height={100} alt="logo" />
        </Link>
        </div>

        <div className="hidden lg:flex gap-2">
          <Button variant="outline" size="rd">
            Talk to sales
          </Button>
          <Button variant="blue" size="rd">
            Sign up for free
          </Button>
        </div>

        <div onClick={openMenu} className="cursor-pointer lg:hidden">
          {
            isOpen ? <XIcon /> : <MenuIcon />
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar