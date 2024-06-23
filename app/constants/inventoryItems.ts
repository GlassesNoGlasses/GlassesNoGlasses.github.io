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
    clickMessage: 'A fresh cup of coffee, hot and inviting.'
}

export const Resume: InventoryItem = {
    id: 1,
    name: "Fancy Paper",
    description: "A piece of paper with nice formatting. On closer inspection, it appears to be a resume of some sort. Must be important.",
    imgPath: '/svg/resume.svg',
    quantity: 1,
    isConsumable: false,
    clickMessage: 'You look at the resume. You feel a sense of pride and accomplishment.'
}

