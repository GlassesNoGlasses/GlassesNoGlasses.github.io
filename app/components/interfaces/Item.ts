
export interface Item {
    id: number;
    name: string;
    iconPath: string;
    isActive: boolean;
    audioPath?: string;
    callback: (item: Item) => void;
}
