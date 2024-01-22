'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { rightAvatar } from '@/util'
import { MessageCircleMore, Mic, Monitor, Settings, Smile, Video } from 'lucide-react'

const RightHero = () => {

    return (
        <>
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 500 }} transition={{ duration: 0.5, delay: 0.5 }} className="basis-1/2 px-8">
                <div className="rounded-sm bg-[#EFF8FF] p-4">
                    <div className="flex justify-between flex-wrap">
                        {
                            rightAvatar.map((avatar, index) => (
                                <div key={index} className={`basis-1/3 p-2`}>
                                    <Image src={avatar.image} className={`bg-[${avatar.color}] rounded`} width={120} height={120} alt='avatar' />
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center mt-4 gap-4">
                        <Mic className='text-blue-700 p-2 rounded-full bg-white' size={32} />
                        <Video className='text-blue-700 p-2 rounded-full bg-white' size={32} />
                        <Monitor className='text-blue-700 p-2 rounded-full bg-white' size={32} />
                        <Smile className='text-blue-700 p-2 rounded-full bg-white' size={32} />
                        <MessageCircleMore className='text-blue-700 p-2 rounded-full bg-white' size={32} />
                        <Settings className='text-blue-700 p-2 rounded-full bg-white' size={32} />

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default RightHero