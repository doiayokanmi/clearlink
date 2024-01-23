import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { links } from '@/util'
import Image from 'next/image'
import { ChevronDown, MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <>
    <nav className="flex border p-2 px-4 justify-between items-center rounded-full bg-[#F2F4F7]">
            <Link href="/">
              <Image src="/images/logo.png" width={100} height={100} alt="logo" />
            </Link>

            <div className="hidden lg:flex text-sm gap-6">
              {
                links.map((link, index) => (
                  <Link key={index} className="flex text-gray-500 items-center gap-2" href="/dashboard">{link.name} {link.drop && <ChevronDown size={12} />} </Link>
                ))
              }
            </div>

            <div className="hidden lg:flex gap-2">
              <Button variant="outline" size="rd">
                Talk to sales
              </Button>
              <Button variant="blue" size="rd">
                Sign up for free
              </Button>
            </div>

            <MenuIcon className='cursor-pointer lg:hidden' />
          </nav>
    </>
  )
}

export default Navbar