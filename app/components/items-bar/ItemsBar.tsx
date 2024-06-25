'use client'

import { ItemsBarProps } from './ItemsBarProps'
import { Item } from '../interfaces/Item'
import { useState } from 'react';

export const ItemsBar = ({
    items,
}: ItemsBarProps) => {

    const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

    const handleCallback = (item: Item) => {
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
    <div className='flex flex-row h-fit w-full align-middle justify-end bg-inherit pt-4'>
        {
        items.map((item: Item, index: number) => {
            return (
                <button className='hover:bg-opacity-85 p-2'
                key={index}
                onClick={() => handleCallback(item)}
                >
                    {item.audioPath && <audio id={item.name + "-audio"} src={item.audioPath} loop={true}/>}
                    <img src={item.iconPath} alt={item.name} className={`h-12 w-12 rounded-xl
                        ${item.isActive ? "bg-slate-200 " : "bg-slate-500 "} ${item.animation ? item.animation : ""}`}/>
                </button>
            )
        })
        }
    </div>
  )
}

