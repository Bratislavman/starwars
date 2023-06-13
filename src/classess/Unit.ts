import { GAME_OBJ_NAMES } from "@/constants/enums";

export class Unit {

    public id: number;
    public name1: string;
    public typeObj: GAME_OBJ_NAMES;

    public constructor(id: number, name1: string) { 
      this.id = id;
      this.name1 = name1;
      this.typeObj = GAME_OBJ_NAMES.Unit;
    }

    public say() {
      console.log(4444);
    }
}