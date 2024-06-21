
import React from 'react'
import { ItemsBarProps } from './ItemsBarProps'
import { Item } from '../interfaces/Item'

export const ItemsBar = ({
    items,
}: ItemsBarProps) => {

  return (
    <div className='flex flex-row h-fit w-full align-middle justify-end bg-inherit'>
        {
        items.map((item: Item) => {
            return (
                <button className='hover:bg-opacity-85 p-2'
                key={item.id}
                onClick={item.callback}
                >
                    {item.audioPath && <audio id={item.name + "-audio"} src={item.audioPath} loop={true}/>}
                    <img src={item.iconPath} alt={item.name} className='h-12 w-12 bg-slate-200 rounded-xl'/>
                </button>
            )
        })
        }
    </div>
  )
}

