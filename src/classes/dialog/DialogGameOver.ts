import { Dialog } from "@/classes/dialog/Dialog";
import { DialogBtn } from "@/classes/dialog/DialogBtn";
import { Game } from "@/classes/game-objects/Game";

export class DialogGameOver extends Dialog {
  public constructor() {
    super(
      'После победы империи многие джедаи были вынуждены стать изгнанниками. Двое из них - Джейдан Райз и Рекс Фьюри затаились на планете Татуин в поселении Гарко. В первый же вечер на новом месте им не повезло - они зашли не в тот район и среди бела дня им устроили ограбление.',
      [
        new DialogBtn(
          'Новая игра',
          () => {
            Game.game.restart();
          }
        ),
      ]
    );
  }
}