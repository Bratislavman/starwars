import { GAME_OBJ_NAMES } from "@/constants/enums";

//это обычный предмет, будь то сюжетный или рахсодник типа стимулятора
export class ItemHandy {
    public id: number = 0;
    public name: string = '';
    public typeObj: GAME_OBJ_NAMES = GAME_OBJ_NAMES.None;

    public constructor(name: string) { 
      this.name = name;
    }
}