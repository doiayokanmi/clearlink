import React from 'react'
import LeftTestimony from '../LeftTestimony'
import RightTestimony from '../RightTestimony'


const Testimony = () => {
  return (
    <>
    <div className="px-24 py-12 flex bg-gray-100">
        <LeftTestimony />
        <RightTestimony />
      </div>
    </>
  )
}

export default Testimony