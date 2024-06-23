
import React from 'react'

export const GameMessage = ({message} : {message: string}) => {
  return (
    <div className='flex h-fit w-screen animate-lightFadeInOut absolute bottom-0 left-0 z-50 bg-opacity-25 bg-inherit'>
        <div className='flex h-fit w-fit bg-black border-green-600 border-4 border-solid'>
            <p className='text-3xl text-left pl-2 text-[#24692b] pr-2'>
                {message}
            </p>
        </div>
    </div>
  )
}

