
import React from 'react'
import { TimelineMilestoneProps } from './TimelineMilestonProps'

export const TimelineMilestone = ({
    id,
    children,
    compelete,
    backgroundStyle,
}: TimelineMilestoneProps) => {
  return (
    <div className={`${backgroundStyle} relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {
                compelete ? 
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-slate-400">
                    <path strokeLinecap="round" fillRule="nonzero" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            }
        </div>
        {/* <!-- Item --> */}
        <div id={id}
                className="flex flex-col h-fit w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                {children}
        </div>
    </div>
  )
}

