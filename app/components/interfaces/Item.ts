
export interface Item {
    id: number;
    name: string;
    iconPath: string;
    isActive: boolean;
    audioPath?: string;
    animation?: string;
    callback: (item: Item) => void;
}
