'use client'

import React from 'react'
import { InventoryProps } from './InventoryProps'
import { BagIcon } from '@/app/constants/icons';
import { InventoryItem } from '../interfaces/InventoryItem';
import { Coffee } from '@/app/constants/inventoryItems';
import { GameMessage } from '../game-message/GameMessage';

export const Inventory = ({
    inventoryItems,
    isActive,
    callback = () => {},
}: InventoryProps) => {
    
    const getDisplayableItems = (items: InventoryItem[]) => {
        return items.filter(item => item.quantity > 0);
    }

    const [items, setItems] = React.useState<InventoryItem[]>(inventoryItems);
    const [coffee, setCoffee] = React.useState<InventoryItem>(Coffee); // Coffee is the first item in the inventory
    const [displayItems, setDisplayItems] = React.useState<InventoryItem[]>(getDisplayableItems([...items, coffee]));
    const [numCoffeesDrank, setNumCoffeesDrank] = React.useState<number>(0);
    const [message, setMessage] = React.useState<string>('');

    const handleBagCallback = () => {
        callback();
        setCoffee(prev => ({...prev, quantity: 1}));
    }

    const handleItemClick = (item: InventoryItem) => {
        if (item.isConsumable) {
            if (item.name === 'Coffee') {
                setNumCoffeesDrank(prev => prev + 1);
                setCoffee(prev => ({...prev, quantity: Math.max(0, prev.quantity - 1)}));
            } else {
                setItems(prev => {
                    const newItems = [...prev];
                    const index = newItems.findIndex(i => i.id === item.id);
                    newItems[index].quantity = Math.max(0, newItems[index].quantity - 1);
                    return newItems;
                })
            }
        }
    }

    React.useEffect(() => {
        setDisplayItems(getDisplayableItems([...items, coffee]));
    }, [items, coffee])

    React.useEffect(() => {
        if (numCoffeesDrank === 1)
            setMessage('You feel energetic and ready to go! ☕️');
        else if (numCoffeesDrank === 2)
            setMessage('Second cup is the best cup! ☕️☕️');
        else if (numCoffeesDrank === 3)
            setMessage('You feel like you can take on the universe! ☕️☕️☕️');
        else if (numCoffeesDrank > 3)
            setMessage('You... need some help...');
        else if (numCoffeesDrank > 5)
            setMessage('You... need some help... badly...');
        else if (numCoffeesDrank > 7)
            setMessage('A short life it is! ☕️☕️☕️☕️☕️☕️☕️☕️☕️');
        else
            setMessage('');
    }, [numCoffeesDrank])

  return (
    <div className='flex flex-col gap-8 min-h-screen max-h-fit w-[50vw] align-middle overflow-y-auto'>
        <button className={`flex justify-center align-middle h-fit w-full pt-8
        ${isActive && "animate-fade-down animate-duration-500"}`}
        onClick={handleBagCallback}>
            <img src={BagIcon.iconPath} alt='bag-inventory'
            className='h-16 w-16 border-white border-2 rounded-full hover:bg-white'/>
        </button>

        <div className={`${isActive && "animate-fade-down animate-duration-300 animate-delay-400"} w-full h-full`}>
            {
                displayItems.length === 0 ? generateEmptySlot() :
                displayItems.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-row gap-12 bg-slate-400 border-sky-600 border-double border-4 h-fit w-full justify-between align-middle'>
                            <img src={item.imgPath} alt={item.name} className='h-24 w-24'/>
                            <div className='flex h-full w-1/2 align-middle justify-center'>
                                <div className='flex flex-col h-full pb-2'>
                                    <h1 className='text-2xl text-white text-center'>{`${item.name} X ${item.quantity}`}</h1>
                                    {item.subtext && <p className='text-white text-xl text-center'>{item.subtext}</p>}
                                    <p className='text-white text-center'>{item.description}</p>
                                    {item.isConsumable && 
                                    <button className='text-3xl bg-gradient-to-r from-blue-800/35 via-sky-500 to-blue-800/30 hover:brightness-110
                                    border-blue-950 border-2 border-solid'
                                    onClick={() => handleItemClick(item)}>
                                        Use
                                    </button>}
                                </div>
                            </div>
                        </div>
                    )
                    
                })
            }
        </div>
    <GameMessage message={message} key={numCoffeesDrank}/>
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

