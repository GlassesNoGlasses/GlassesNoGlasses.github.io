import { InventoryItem } from "../interfaces/InventoryItem";

export interface InventoryProps {
    inventoryItems: InventoryItem[];
    isActive: boolean;
    callback?: () => void;
}
