import React from 'react'
import LeftHero from '../LeftHero'
import RightHero from '../RightHero'

const Hero = () => {
    return (
        <>
            <div className="flex-1 flex flex-col lg:flex-row gap-4 items-center justify-between">
                <LeftHero />
                <RightHero />
            </div>
        </>
    )
}

export default Hero