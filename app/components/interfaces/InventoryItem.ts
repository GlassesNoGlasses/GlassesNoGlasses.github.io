
export interface InventoryItem {
    id: number;
    name: string;
    subtext?: string;
    description: string;
    imgPath: string;
    quantity: number;
    isConsumable: boolean;
    clickMessage?: string;
}
