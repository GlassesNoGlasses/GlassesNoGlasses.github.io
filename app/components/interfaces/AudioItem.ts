import { Item } from "./Item";

export interface AudioItem extends Item {
    audioPath: string;
    playing: boolean;
}
