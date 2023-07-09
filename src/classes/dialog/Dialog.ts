import { DialogBtn } from "@/classes/dialog/DialogBtn";
import { Game } from "@/classes/game-objects/Game";

export class Dialog {
  public title: string = '';
  public text: string = '';
  public btns: DialogBtn[] = [];

  public constructor(text: string, btns: DialogBtn[] = []) {
    this.text = text;
    this.btns = btns.length ? btns : [
      new DialogBtn('Закрыть', () => {
        Game.game.dialog = null;
      })];
  }
}