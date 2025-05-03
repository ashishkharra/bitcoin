import React from 'react'

const Loader = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className="flex items-center justify-center h-32 w-32 bg-gray-700 rounded-md">
                <div className="flex flex-col items-center text-white">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    )
}

export default Loader