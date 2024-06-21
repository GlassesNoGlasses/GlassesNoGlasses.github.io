
import React from 'react'
import { ProjectProps } from './ProjectProps'

export const Project = ({
    title,
    subtitle,
    description,
    leftAnimate = true,
    imagePaths = [],
}: ProjectProps) => {

  return (
    <div className={`flex flex-col border-slate-50 border-[6px] border-double rounded-md
    ${leftAnimate ? 'animate-fade-left' : 'animate-fade-right animate-duration-1000'}`}>
        <h1 className='pl-4 text-4xl text-left font-bold font-sans text-yellow-100'>{title}</h1>
        {subtitle && <h2 className='pl-4 text-2xl text-left font-serif text-zinc-200 pt-2'>{subtitle}</h2>}
        <p className='pl-4 text-2xl text-center font-sans text-zinc-200'>{description}</p>
    </div>
  )
}

