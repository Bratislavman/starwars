import { Item } from "@/classes/game-objects/item/Item";

export class ItemWeapon extends Item {
  public constructor(name: string, carrierId: number, icon: string, actionFunc: Function) {
    super(name, carrierId, icon, actionFunc);
  }
}