import React from 'react'

const ClearLink = ( {title, content, icon}: any ) => {
    return (
        <>
            <div className="basis-1/2 space-y-2 pe-8 pt-8">
                <div className="p-2 inline-block rounded-full text-blue-700 bg-gray-200">

                {icon}

                </div>
                <h1 className="text-lg font-semibold">
                    {title}
                </h1>

                <p className='text-sm text-gray-600'>
                    {content}
                </p>
            </div>
        </>
    )
}

export default ClearLink