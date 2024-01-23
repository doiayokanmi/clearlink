'use client'

import { sponsors } from '@/util'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Sponsor = () => {
  return (
    <>
    <motion.div initial={{x: 400}} whileInView={{x: 0}} transition={{duration: 0.4}} className="p-4 lg:p-24">
        <p className="text-center text-gray-600">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>

        <div className="flex flex-wrap gap-4 mt-8 justify-between">
          {
            sponsors.map((sponsor, index) => (
              <Image key={index} src={sponsor} width={100} height={40} alt="sponsor" />
            ))
          }
        </div>
      </motion.div>
    </>
  )
}

export default Sponsor