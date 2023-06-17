import { GameObject } from "@/classes/GameObject";

export class Mission0 extends GameObject {
    public name: string;
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