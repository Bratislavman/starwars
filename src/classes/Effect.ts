import { GameObject } from "@/classes/GameObject";
import { ACTION_TYPE } from "@/constants/enums";
import { Game } from "@/classes/Game";

export class Effect extends GameObject {
  public targetId: number;
  public actionType: ACTION_TYPE;
  public icon: string;
  public actionEffect: Function;
  //сколько действует эффект, -1 бесконечно
  public counter: number = -1;

  public constructor(targetId: number, actionType: ACTION_TYPE, icon: string, counter: number, actionEffect: Function) {
    super();
    this.targetId = targetId;
    this.actionType = actionType;
    this.icon = icon;
    this.counter = counter;
    this.actionEffect = actionEffect;
  }

  public action() {
    this.actionEffect();
    if (this.counter !== -1) {
      const counter = this.counter - 1;
      if (counter === 0) {
        Game.game.removeGameObject(this.id);
      }
    }
  }
}