import { GAME_OBJ_NAMES } from "@/constants/enums";
import { GameObject } from "@/classes/GameObject";
import { Character } from "@/classes/Character";
import { Mission } from '@/classes/mission/Mission';
import { TTypeOrNull } from '@/constants/types';

export class Game extends GameObject {
    public static game: TTypeOrNull<Game> = null;

    public idCounter: number = 0;
    public gameObjects: GameObject[] = [];
    public mission: TTypeOrNull<Mission> = null;
    public dialog: any = null;
    public battleMembersIds: number[] = [];
    public currentUserId: number = 0;

    public constructor() { 
      super('Game');
      this.typeObj = GAME_OBJ_NAMES.Game;
      Game.game = this;
    }

    public getUnitBattleActions(obj: GameObject) {
      
    }

    public getHeroBattleActions(heroId: number) {
      //this.getUnitBattleActions();
    }

    public addGameObject(obj: GameObject) {
      this.gameObjects.push(obj);
      this.idCounter += 1;
      obj.id = this.idCounter;
    }

    public removeGameObject(id: number) {
      this.gameObjects = this.gameObjects.filter(obj => obj.id === id);
    }
}