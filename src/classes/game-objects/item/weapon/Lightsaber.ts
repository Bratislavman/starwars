import { Item } from "@/classes/game-objects/item/Item";

//это обычный предмет, будь то сюжетный или рахсодник типа стимулятора
export class ItemHandy extends Item {
    public constructor(name: string, carrierId: number, icon: string, actionFunc: Function) {
      super(name, carrierId, icon, actionFunc);
    }
}