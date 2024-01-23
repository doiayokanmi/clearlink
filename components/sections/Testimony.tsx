import React from 'react'
import LeftTestimony from '../LeftTestimony'
import RightTestimony from '../RightTestimony'


const Testimony = () => {
  return (
    <>
    <div className="lg:px-24 lg:py-12 p-4 flex flex-col lg:flex-row bg-gray-100">
        <LeftTestimony />
        <RightTestimony />
      </div>
    </>
  )
}

export default Testimony