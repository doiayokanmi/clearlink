import React from 'react'
import { AudioLines, Calendar, Unlock, Video } from "lucide-react";
import ClearLink from "@/components/ClearLink";
import Image from "next/image";

const ClearAdv = () => {
    const clearLinks = [
        {
            title: 'Crystal-clear HD video',
            content: 'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.',
            icon: <Video size={14} />
        },
        {
            title: 'Noise-canceling audio',
            content: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
            icon: <AudioLines size={14} />
        },
        {
            title: 'Scheduling made easy',
            content: 'Streamline your agenda with ClearLinks intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.',
            icon: <Calendar size={14} />
        },
        {
            title: 'Bank-grade security',
            content: 'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.',
            icon: <Unlock size={14} />
        }
    ]
    return (
        <>
            <div className="px-24 py-12 flex justify-between items-end">
                <div className="basis-2/3">
                    <p className="text-blue-700 font-semibold">
                        The ClearLink Advantage
                    </p>

                    <h1 className="font-semibold text-2xl py-4">
                        Why choose ClearLink?
                    </h1>

                    <p className="text-xl">
                        In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:
                    </p>


                    <div className="mt-12 flex flex-wrap">
                        {
                            clearLinks.map((clearLink, index) => (
                                <ClearLink key={index} title={clearLink.title} content={clearLink.content} icon={clearLink.icon} />
                            ))
                        }

                    </div>
                </div>

                <div className="basis-1/3 relative">
                    <Image className='absolute -top-[150px] left-1/2 -translate-x-1/2' src={'/images/svg/arrow.svg'} width={200} height={200} alt='arrow' />
                    <Image src={'/images/rectangle 1.png'} width={500} height={500} alt="Rectangle" />
                </div>
            </div>
        </>
    )
}

export default ClearAdv