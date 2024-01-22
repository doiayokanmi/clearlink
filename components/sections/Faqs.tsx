'use client'

import { faqs } from '@/util'
import { MinusCircle, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Faqs = () => {
    const [active, setActive] = useState(0)
    return (
        <section className='px-24 py-12 flex'>
            <motion.div initial={{x: -300}} whileInView={{x: 0}} transition={{duration: 0.5}} className="basis-1/2 pe-16 ">
                <h6 className="text-blue-700 font-semibold">
                    Support
                </h6>
                <h1 className="font-semibold py-4 text-2xl">
                    FAQs
                </h1>

                <p className="text-gray-500 text-xl">
                    Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>
            </motion.div>
            <div className="basis-1/2">

                {
                    faqs.map((faq, index) => (
                        <motion.div initial={{x: 300}} transition={{duration: 0.05}} whileInView={{x: 0}} key={index} className={`p-4 transition-all duration-300 rounded-sm ${active == index ? 'border bg-gray-50' : 'border-b'}`}>
                            <div className="flex justify-between items-center pb-2">
                                <h1 className='font-semibold'>{faq.title}</h1>
                                <div className="cursor-pointer" onClick={() => setActive(index)}>
                                    {
                                        active == index ? <MinusCircle size={14} /> : <PlusCircle size={14} />
                                    }
                                </div>
                            </div>

                            {
                                active == index && (
                                    <p className='text-gray-500 text-sm'>
                                        {faq.content}
                                    </p>
                                )
                            }
                        </motion.div>
                    ))
                }


            </div>
        </section>
    )
}

export default Faqs