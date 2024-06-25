import { AudioItem } from "../components/interfaces/AudioItem";
import { Item } from "../components/interfaces/Item";

export const MeteorsIcon: Item = {
    id: 0,
    name: 'Star Fall',
    iconPath: "/svg/star-fall.svg",
    isActive: true,
    callback: (item: Item) => console.log('Star Fall')
}

export const CampfireIcon: AudioItem = {
    id: 1,
    name: 'Campfire',
    iconPath: "/svg/fire.svg",
    isActive: false,
    callback: (item: Item) => console.log('Campfire'),
    audioPath: "/sounds/fire.mp3",
    playing: false,
}

export const BagIcon: Item = {
    id: 2,
    name: 'Bag',
    iconPath: "/svg/bag.svg",
    isActive: false,
    callback: (item: Item) => console.log('Bag'),
    animation: 'animate-bounce'
}

export const BugIcon: Item = {
    id: 3,
    name: 'Bug',
    iconPath: "/svg/bug.svg",
    isActive: false,
    callback: (item: Item) => alert("!̶̨̧̛̙̯̗̦̹͔͇̯̟̘͒̽̏͌́̐̒͌̌̄̈͘̕͜͝͠ͅ?̷̲̰̖̮̹͚͙̣͒̂̅͒͛́̃͑̊͝͠-̵̧̼̬̹̞̰͍͙̫͂̒͐̅̓͊͑͌̊͂̚͘͜͜͝-̴͇̿̉͆͗́̈̏̒͒͆̐̿̊͋͂̈́̽͝c̵AE̵̔̿̀̾̏̅͂̂̕͝s̵̢͖͔̩̼̲̥̲̰͎̦͕̙͕̿̌͊́̚͘ar=̴͓͔͖̩̯͇̺̱͕̬̤̬͗̐̈͆̍͗̈̈͌̎̈́̐̎̄͗̓̕͝͠|̴̡͍̠̣̗̟̟̩̗̮̩̖̝̭̏̈́́͒́̅̓͆̃̍̉̈̌̾͒͜ͅ|̶͒̉̀̉"),
}

