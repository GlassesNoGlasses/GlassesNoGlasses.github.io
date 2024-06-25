import { InventoryItem } from "../interfaces/InventoryItem";

export interface InventoryProps {
    inventoryItems: InventoryItem[];
    isActive: boolean;
    callback: (items: InventoryItem[]) => void;
    bugCallback: (numBugs: number) => void;
    bugs: number;
}
