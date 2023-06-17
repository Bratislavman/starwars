import { GameObject } from "@/classes/GameObject";
import { Characteristick } from "@/classes/Characteristick";
import { Weapon } from "@/classes/Weapon";
import { Effect } from "@/classes/Effect";
import { Item } from "@/classes/Item";
import { TTypeOrNull } from '@/constants/types';

export class Character extends GameObject {
    public charasteristicks: Characteristick[] = [];
    public firstWeapon: TTypeOrNull<Weapon> = null;
    public secondWeapon: TTypeOrNull<Weapon> = null;
    public items: TTypeOrNull<Item> = null;
    public effects: TTypeOrNull<Effect> = null;

    public constructor() { 
      super();
    }
}