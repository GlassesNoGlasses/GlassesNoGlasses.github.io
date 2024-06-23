
import React from 'react'
import { InventoryProps } from './InventoryProps'
import { BagIcon } from '@/app/constants/icons';
import { InventoryItem } from '../interfaces/InventoryItem';

export const Inventory = ({
    inventoryItems,
    isActive,
    callback = () => {},
}: InventoryProps) => {

    const handleBagClick = () => {
        callback();
        console.log('bag clicked');
    }

  return (
    <div className='flex flex-col gap-8 min-h-screen max-h-fit w-[50vw] align-middle overflow-y-auto'>
        <button className={`flex justify-center align-middle h-fit w-full pt-8
        ${isActive && "animate-spin animate-once animate-duration-500"}`}
        onClick={handleBagClick}>
            <img src={BagIcon.iconPath} alt='bag-inventory'
            className='h-16 w-16 border-white border-2 rounded-full hover:bg-white'/>
        </button>

        <div className={`${isActive && "animate-fade-down animate-duration-300 animate-delay-500"}`}>
            {
                inventoryItems.length === 0 ? generateEmptySlot() : inventoryItems.map((item, index) => {
                    return (
                        displayInventoryItem(item, index)
                    )
                })
            }
        </div>

    </div>
  )
}


const displayInventoryItem = (item: InventoryItem, index: number): JSX.Element => {
    return (
        <div key={index} className='flex flex-row gap-12 bg-slate-400 border-sky-600 border-double border-4 h-fit w-full justify-between align-middle'>
            <img src={item.imgPath} alt={item.name} className='h-24 w-24'/>
            <div className='flex h-24 w-1/2 align-middle justify-center'>
                <div className='flex flex-col h-full w-full'>
                    <h1 className='text-2xl text-white text-center'>{`${item.name} X ${item.quantity}`}</h1>
                    {item.subtext && <p className='text-white text-xl text-center'>{item.subtext}</p>}
                    <p className='text-white text-center'>{item.description}</p>
                </div>
            </div>
        </div>
    )

}

// display when no items in inventory
const generateEmptySlot = (): JSX.Element => {
    return (
        <div className='h-fit w-full bg-sky-950/75'>
            <h1 className='text-center text-3xl text-white'>
                There are currently no items in your inventory. Please check back later!
            </h1>
        </div>
    )
}

