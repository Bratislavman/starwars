import { GameObject } from "@/classes/game-objects/GameObject";
import { Characteristick } from "@/classes/game-objects/Characteristick";
import { ItemWeapon } from "@/classes/game-objects//item/ItemWeapon";
import { Effect } from "@/classes/game-objects/Effect";
import { Item } from "@/classes/game-objects/item/Item";
import { THaveType } from '@/constants/types';

export class Character extends GameObject {
    public charasteristicks: Characteristick[] = [];
    public firstWeapon: THaveType<ItemWeapon> = null;
    public secondWeapon: THaveType<ItemWeapon> = null;
    public items: THaveType<Item> = null;
    public effects: THaveType<Effect> = null;

    public constructor() { 
      super();
    }
}