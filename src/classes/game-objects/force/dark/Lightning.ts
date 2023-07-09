import { GameObject } from "@/classes/game-objects/GameObject";
import { TYPE_FORCE } from "@/constants/enums";

export class Force extends GameObject {
    public targetId: number;
    public icon: string;
    public action: Function;
    public type: TYPE_FORCE = TYPE_FORCE.Neutral;

    public constructor(targetId: number, name: string, icon: string, actionFunc: Function ) { 
      super();
      this.targetId = targetId;
      this.name = name;
      this.icon = icon;
      this.action = actionFunc;
    }
}