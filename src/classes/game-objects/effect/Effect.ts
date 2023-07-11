import { GameObject } from "@/classes/game-objects/GameObject";
import { ACTION_TYPE } from "@/constants/enums";

export class Effect extends GameObject {
  public creatorId: number;
  public targetId: number;
  public actionType: ACTION_TYPE;
  public icon: string;
  public actionEffect: Function;
  //если эффект только боевой, то после боя он уничтожится
  public onlyBattle: boolean = false;
  //сколько действует эффект, -1 бесконечно
  public counter: number = -1;

  public constructor(creatorId: number, targetId: number, actionType: ACTION_TYPE, icon: string, counter: number, actionEffect: Function) {
    super();
    this.creatorId = creatorId;
    this.targetId = targetId;
    this.actionType = actionType;
    this.icon = icon;
    this.counter = counter;
    this.actionEffect = actionEffect;
  }

  public action() {
    this.actionEffect();
    if (this.counter > 0) {
      this.counter -= 1;
      if (this.counter === 0) {
        this.destroy();
      }
    }
  }
}