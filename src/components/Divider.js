import React from 'react'

const Divider = () => {
  return (
    <div className='relative my-6'>
      <div className='absolute inset-0 flex items-center'>
        <div className='w-full border-t border-neutral-700'></div>
      </div>
      <div className='relative flex justify-center'>
        <div className='px-4 bg-neutral-900 text-white text-sm font-semibold'>
          <span className='animate-pulse'>•••</span>
        </div>
      </div>
    </div>
  )
}

export default Divider

