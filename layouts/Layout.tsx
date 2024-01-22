'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.main
            className='overflow-hidden'
                initial={{ opacity: 0, x: -1200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -1200 }}
                transition={{ duration: 0.5 }}>
                {children}
            </motion.main>
        </AnimatePresence>
    )
}

export default Layout