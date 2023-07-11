import { GameObject } from "@/classes/game-objects/GameObject";
import { Characteristick } from "@/classes/game-objects/Characteristick";
import { ItemWeapon } from "@/classes/game-objects/item/weapon/ItemWeapon";
import { Effect } from "@/classes/game-objects/effect/Effect";
import { Item } from "@/classes/game-objects/item/Item";
import { THaveType } from '@/constants/types';
import { TEAM } from "@/constants/enums";

export class Character extends GameObject {
  public charasteristicks: Characteristick[] = [];
  public firstWeapon: THaveType<ItemWeapon> = null;
  public secondWeapon: THaveType<ItemWeapon> = null;
  public items: THaveType<Item> = null;
  public effects: THaveType<Effect> = null;
  public side: TEAM = TEAM.Enemy;
  public icon: string = '';
  //небоевой персонаж(например, бочка которую можно взорвать атакой)
  public notCombat = false;
  //для енамов мисии
  public location: string = '';

  public constructor() {
    super();
  }

  public battleAI() {

  }
}