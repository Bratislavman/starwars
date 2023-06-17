import { GameObject } from "@/classes/GameObject";
import { ACTION_TYPE } from "@/constants/enums";

export class Effect extends GameObject {
    public targetId: number;
    public actionType: ACTION_TYPE;
    public icon: string;
    public actionFunc: Function;

    public constructor(targetId: number, actionType: ACTION_TYPE, icon: string, actionFunc: Function ) { 
      super();
      this.targetId = targetId;
      this.actionType = actionType;
      this.icon = icon;
      this.actionFunc = actionFunc;
    }
}