'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ClearLink = ({ title, content, icon }: any) => {
    return (
        <>
            <motion.div initial={{x: -300}} whileInView={{x: 0}} transition={{duration: 0.5}} className="basis-1/2 flex flex-col items-center lg:items-start space-y-2 lg:pe-8 pt-8">
                <div>
                    <div className="p-2 inline-block rounded-full text-blue-700 bg-gray-200">
                        {icon}
                    </div>
                </div>
                <h1 className="text-lg font-semibold">
                    {title}
                </h1>

                <p className='text-sm text-center lg:text-start text-gray-600'>
                    {content}
                </p>
            </motion.div>
        </>
    )
}

export default ClearLink