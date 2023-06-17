import { GameObject } from "@/classes/GameObject";

export class Force extends GameObject {
    public targetId: number;
    public icon: string;
    public actionFunc: Function;

    public constructor(targetId: number, icon: string, actionFunc: Function ) { 
      super();
      this.targetId = targetId;
      this.icon = icon;
      this.actionFunc = actionFunc;
    }
}