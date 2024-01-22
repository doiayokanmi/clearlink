import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, Twitter, YoutubeIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className='bg-gray-50 flex items-center justify-between px-24 p-4'>
        <p className='text-sm text-gray-600'>
        © {year} ClearLink. All rights reserved.
        </p>

        <div className="flex gap-8">
        <Link href={'/'}>
                <LinkedinIcon size={14} />
            </Link>
            <Link href={'/'}>
                <Twitter size={14} />
            </Link>
            <Link href={'/'}>
                <FacebookIcon size={14} />
            </Link>
            <Link href={'/'}>
                <InstagramIcon size={14} />
            </Link>
            <Link href={'/'}>
                <GithubIcon size={14} />
            </Link>
            <Link href={'/'}>
                <YoutubeIcon size={14} />
            </Link>
        </div>
    </footer>
  )
}

export default Footer