'use client'

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { avatars } from '@/util'
import Image from 'next/image'

const LeftHero = () => {
    return (
        <>
            <motion.div initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: -500 }} transition={{ duration: 0.5, delay: 0.5 }} className="basis-1/2 lg:pe-2 py-4">
                <h1 className="text-center lg:text-start text-5xl font-bold">
                    Uniting the world,one video call at a time
                </h1>

                <p className="text-lg py-8 text-gray-500">
                    Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.
                </p>

                <div className="flex justify-between lg:justify-start items-center lg:gap-4">
                    <Button variant="blue" size="rd">
                        Start your free trial
                    </Button>

                    <Link href={'/'} className="flex font-semibold text-blue-700 hover:text-blue-500 gap-2 items-center">
                        <Bot size={14} />
                        Discover AI assistance
                    </Link>
                </div>

                <div className="flex items-center gap-4 pt-4 ">
                    <div className="flex ms-4">
                        {
                            avatars.map((avatar, index) => (
                                <Avatar key={index} className='-ms-4'>
                                    <AvatarImage src={avatar.image} />
                                    <AvatarFallback>{avatar.name}</AvatarFallback>
                                </Avatar>
                            ))
                        }
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                {
                                    [1, 2, 3, 4, 5].map((i) => (
                                        <Image key={i} src="/images/avatars/Star.png" width={12} height={12} alt="review star" />
                                    ))
                                }
                            </div>

                            <p className='text-xs text-gray-500 font-bold'>
                                5.0
                            </p>
                        </div>

                        <p className='text-xs text-gray-500 pt-1'>
                        from 3,000+ reviews
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default LeftHero