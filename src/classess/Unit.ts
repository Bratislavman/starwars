import { GAME_OBJ_NAMES } from "@/constants/constants";

export class Unit {

    public id: number;
    public name1: string;
    public typeObj: string;

    public constructor(id: number, name1: string) { 


      //console.log(GAME_OBJ_NAMES);
      this.id = id;
      this.name1 = name1;
      this.typeObj = "vbvb";
    }

    public say() {
      console.log(4444);
    }
}