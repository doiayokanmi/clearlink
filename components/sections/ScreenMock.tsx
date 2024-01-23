import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { CheckCircle2 } from 'lucide-react'

const ScreenMock = () => {
    const list  = ['30 days free trial', 'Cancel at any time', 'Access to all features', 'Personalized onboarding']
  return (
    <section className='flex flex-col lg:flex-row lg:ps-24 lg:pt-12'>
        <div className="basis-1/2 p-4 lg:pe-12">
            <h1 className="py-4 font-semibold text-4xl">
            Ready to clear the path to perfect communication?
            </h1>

            <ul className='p-4'>
                {
                    list.map((item, index) => (
                        <li key={index} className="py-2 flex gap-2 items-center"><CheckCircle2 size={14} color='#175CD3' /> {item}</li>
                    ))
                }
            </ul>

            <div className="flex gap-2">
              <Button variant="outline" size="rd">
                Talk to sales
              </Button>
              <Button variant="blue" size="rd">
                Sign up for free
              </Button>
            </div>
        </div>
        <div className="basis-1/2">
            <Image src={'/images/screen.png'} width={600} height={400} alt='' />
        </div>

    </section>
  )
}

export default ScreenMock