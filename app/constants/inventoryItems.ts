import { InventoryItem } from "../components/interfaces/InventoryItem";

export const EmptySlot: InventoryItem = {
    id: -1,
    name: 'Empty Slot',
    imgPath: '',
    description: 'Thanosed from existence',
    callback: (item: InventoryItem) => console.log('Empty Slot'),
    quantity: 0,
}

export const Coffee: InventoryItem = {
    id: 0,
    name: "Coffee",
    description: "A nice cup of coffee to start your day",
    imgPath: '/svg/coffee.svg',
    callback: (item: InventoryItem) => console.log('Coffee'),
    quantity: 1,
}

