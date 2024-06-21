
export interface Item {
    id: number;
    name: string;
    iconPath: string;
    audioPath?: string;
    callback: () => void;
}
