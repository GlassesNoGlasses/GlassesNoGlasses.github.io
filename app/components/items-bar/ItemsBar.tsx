'use client'

import React from 'react'
import { ItemsBarProps } from './ItemsBarProps'
import { Item } from '../interfaces/Item'

export const ItemsBar = ({
    items,
}: ItemsBarProps) => {

    const [audioPlaying, setAudioPlaying] = React.useState<boolean>(false);

    const handleCallback = (item: Item, index: number) => {
        item.callback(item);
        if (item.audioPath) {
            const audio = document.getElementById(`${item.name + "-audio"}`) as HTMLAudioElement;
            if (audio) {
                !audioPlaying ? audio.play() : audio.pause();
                setAudioPlaying(!audioPlaying);
            }
        }
    }

  return (
    <div className='flex flex-row h-fit w-full align-middle justify-end bg-inherit'>
        {
        items.map((item: Item, index: number) => {
            return (
                <button className='hover:bg-opacity-85 p-2'
                key={item.id}
                onClick={() => handleCallback(item, index)}
                >
                    {item.audioPath && <audio id={item.name + "-audio"} src={item.audioPath} loop={true}/>}
                    <img src={item.iconPath} alt={item.name} className={`h-12 w-12 rounded-xl
                        ${item.isActive ? "bg-slate-200" : "bg-slate-500"} `}/>
                </button>
            )
        })
        }
    </div>
  )
}

