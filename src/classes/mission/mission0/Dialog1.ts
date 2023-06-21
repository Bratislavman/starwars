import { Dialog } from "@/classes/Dialog";

export class Dialog1 extends Dialog {
    public constructor(id: number, name1: string) { 
      this.id = id;
      this.name1 = name1;
      this.typeObj = GAME_OBJ_NAMES.Unit;
    }

    public say() {
      console.log(4444);
    }
}