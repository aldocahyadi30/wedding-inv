import React from 'react'

const WishComment = ({name,wish}) => {
  return (
    <div className='w-full flex flex-col bg-zinc-100 p-2 rounded-lg mb-1'>
        <p className='poppins-bold text-sm text-zinc-700 text-left'>{name}</p>
        <p className='poppins-regular text-zinc-500 text-left'>{wish}</p>
    </div>
  )
}

export default WishComment