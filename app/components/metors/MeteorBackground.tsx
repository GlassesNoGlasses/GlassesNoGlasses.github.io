
import React from 'react'
import clsx from 'clsx'
import { MeteorBackgroundProps } from './MeteorBackgroundProps'

export const MeteorBackground = ({
    numMeteors = 10
} : MeteorBackgroundProps) => {

  const meteors = Array.from({length: numMeteors}, (_, i) => i);
    
  return (
    <>
      {
      meteors.map((meteor, index) => {
        return (
          <span
            key={"meteor" + index}
            className={clsx(
              "z-10",
              "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[75px] before:h-[1.5px] before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent"
            )}
            style={{
              top: Math.floor(Math.random() * (50 - -50) + -50) + "px",
              left: Math.floor(Math.random() * (500 - -500) + -500) + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          />
        )
      })
      }
    </>
  )
}

