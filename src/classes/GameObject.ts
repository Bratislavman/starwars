import { GAME_OBJ_NAMES } from "@/constants/enums";

//это все объекты игры, включая саму игру
export class GameObject {
    public id: number = 0;
    public name: string = '';
    public typeObj: GAME_OBJ_NAMES = GAME_OBJ_NAMES.None;

    public constructor(name: string = '') { 
      this.name = name;
    }
}