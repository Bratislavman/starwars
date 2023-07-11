import { GAME_OBJ_NAMES } from "@/constants/enums";
import { Game } from "@/classes/game-objects/Game";

//это все объекты игры, включая саму игру
export class GameObject {
    public id: number = 0;
    public name: string = '';
    //это имя класса объекта, которое будет браться для создания экземпляра с json
    public typeObj: GAME_OBJ_NAMES = GAME_OBJ_NAMES.None;

    public constructor() {

    }

    public destroy() {
        Game.game.removeGameObject(this.id);
    }
}