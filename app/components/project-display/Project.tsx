
import React from 'react'
import { ProjectProps } from './ProjectProps'

export const Project = ({
    title,
    description,
    leftAnimate = true,
}: ProjectProps) => {


  return (
    <div className={`flex flex-col border-slate-50 border-[6px] border-double rounded-md
    ${leftAnimate ? 'animate-fade-left' : 'animate-fade-right animate-duration-1000'}`}>
        <h1 className='text-4xl text-center font-bold font-sans text-yellow-100'>{title}</h1>
        <p className='text-2xl text-center font-sans text-zinc-200'>{description}</p>
    </div>
  )
}

