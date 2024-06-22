
import React from 'react'
import { ProjectProps } from './ProjectProps'

export const Project = ({
    title,
    subtitle,
    projectLink,
    description,
    leftAnimate = true,
    languages = [],
    frameworks = [],
    imagePaths = [],
}: ProjectProps) => {

  const iconDisplays = [...languages, ...frameworks];
  const animateDisplay = leftAnimate ? 'animate-fade-left animate-duration-1000' : 'animate-fade-right animate-duration-1000';
  const textDisplay = leftAnimate ? 'text-left pl-6' : 'text-right pr-6';
  const iconDisplayStyle = leftAnimate ? 'pl-6 justify-start' : 'pr-6 justify-end';

  return (
    <div className={`flex flex-col ${animateDisplay}`}>
      <a href={projectLink} target='_blank'>
        <h1 className={`${textDisplay} text-4xl font-bold font-sans text-yellow-100 underline`}>{title}</h1>
      </a>
        {subtitle && <h2 className={`${textDisplay} text-2xl font-serif text-zinc-200 pt-2`}>{subtitle}</h2>}
        <div className={`flex flex-row gap-2 pt-4 ${iconDisplayStyle}`}>
          {iconDisplays.map((iconPath, index) => {
            return <img key={index} src={iconPath} alt={iconPath.slice(iconPath.indexOf("svg/"))} className='w-8 h-8'/>
          })}
        </div>
        <p className={`${textDisplay} pt-4 text-2xl font-sans text-zinc-200`}>{description}</p>
    </div>
  )
}

