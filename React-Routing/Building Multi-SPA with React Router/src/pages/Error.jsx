import React from 'react'

const Error = () => {
  return (
      <div className='flex flex-col items-center justify-center h-full space-y-4 mt-[2rem]'>
      <p className='font-semibold text-4xl'>An error occurred!</p>
      <p className='text-lg text-detail'>Could not find this page</p>
    </div>
  )
}

export default Error