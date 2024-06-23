import { InventoryItem } from "../components/interfaces/InventoryItem";

export const EmptySlot: InventoryItem = {
    id: -1,
    name: 'Empty Slot',
    imgPath: '',
    description: 'Thanosed from existence',
    quantity: 0,
    isConsumable: false,
}

export const Coffee: InventoryItem = {
    id: 0,
    name: "Coffee",
    description: "A nice cup of coffee to start your day",
    imgPath: '/svg/coffee.svg',
    quantity: 1,
    isConsumable: true,
}

