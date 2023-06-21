import { DialogBtn } from "@/classes/DialogBtn";
import { Game } from "@/classes/Game";

export class Dialog {
  public title: string = '';
  public text: string = '';
  public btns: DialogBtn[] = [];

  public constructor(title: string, text: string, btns: DialogBtn[] = []) {
    this.title = title;
    this.text = text;
    this.btns = btns.length ? btns : [
      new DialogBtn('Закрыть', () => {
        Game.game.dialog = null;
      })];
  }
}