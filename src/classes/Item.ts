import { GameObject } from "@/classes/GameObject";

export class Item extends GameObject {
    public targetId: number;
    public icon: string;
    public action: Function;

    public constructor(targetId: number, icon: string, actionFunc: Function ) { 
      super();
      this.targetId = targetId;
      this.icon = icon;
      this.action = actionFunc;
    }
}