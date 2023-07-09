import { GameObject } from "@/classes/game-objects/GameObject";

export class Item extends GameObject {
  public carrierId: number;
  public icon: string;
  public action: Function;

  public constructor(name: string, carrierId: number, icon: string, actionFunc: Function) {
    super();
    this.name = name;
    this.carrierId = carrierId;
    this.icon = icon;
    this.action = actionFunc;
  }
}