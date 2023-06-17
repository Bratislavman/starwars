import { GAME_OBJ_NAMES } from "@/constants/enums";
import { GameObject } from "@/classes/GameObject";
import { Mission } from '@/classes/mission/Mission';
import { TTypeOrNull } from '@/constants/types';

export class Game extends GameObject {
    public static game: TTypeOrNull<Game> = null;

    public idCounter: number = 0;
    public gameObjects: GameObject[] = [];
    public mission: TTypeOrNull<Mission> = null;
    public dialog: any = null;
    public battleMembersIds: number[] = [];
    public heroesIds: number[] = [1,2,3];
    
    //для интерфейса
    public currentUserId: number = 0;
    public currentUserBg: string = '';
    public currentUserImg: string = 'human';
    public currentUserHp: number = 0;
    public currentUserHpMax: number = 0;
    public currentUserForce: number = 0;
    public currentUserForceMax: number = 0;
    public currentUserBattleActions: any[] = [];
    public sceneElements: any[] = [];
  
    public constructor() { 
      super('Game');
      this.typeObj = GAME_OBJ_NAMES.Game;
      Game.game = this;
    }

    public getUnitBattleActions1(obj: GameObject) {
      return [];
    }

    public getUnitBattleActions(obj: GameObject) {
      return [];
    }

    public nextHero() {
      const oldId = this.heroesIds.shift();
      this.heroesIds.push(oldId);
      this.currentUserId = this.heroesIds[0];

      let bg = 'kel-dor';
      if (this.currentUserId === 1) bg = 'human';
      if (this.currentUserId === 2) bg = 'kel-dor';
      if (this.currentUserId === 3) bg = 'trand';
      this.currentUserImg = bg;
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