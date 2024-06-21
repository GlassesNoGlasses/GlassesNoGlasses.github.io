import { AudioItem } from "../components/interfaces/AudioItem";
import { Item } from "../components/interfaces/Item";

export const StarFallIcon: Item = {
    id: 0,
    name: 'Star Fall',
    iconPath: "/svg/star-fall.svg",
    callback: () => console.log('Star Fall')
}

export const CampfireIcon: AudioItem = {
    id: 1,
    name: 'Campfire',
    iconPath: "/svg/fire.svg",
    callback: () => console.log('Campfire'),
    audioPath: "/sounds/fire.mp3",
    playing: false
}
