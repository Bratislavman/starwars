import { GAME_OBJ_NAMES, ACTION_UI } from "@/constants/enums";
import { GameObject } from "@/classes/game-objects/GameObject";
import { Mission } from '@/classes/mission/Mission';
import { Dialog } from '@/classes/dialog/Dialog';
import { DialogNewGame } from '@/classes/dialog/DialogNewGame';
import { IconBtn } from '@/classes/ui/IconBtn';
import { THaveType } from '@/constants/types';

export class Game extends GameObject {
  public static game: THaveType<Game> = null;

  public idCounter: number = 0;
  public gameObjects: GameObject[] = [];

  public mission: THaveType<Mission> = null;
  //пройденные мисссии
  public missionCompletedIds: number[] = null;

  public dialog: THaveType<Dialog> = null;

  //участники текущего боя
  public battleMembersIds: number[] = [];

  //персонажи игрока
  public playerHeroesIds: number[] = [];

  //рестарт
  public needRestart: boolean = false;

  //интерфейс/////////////
  //выбранное действие, которое игрок применит к игр объекту в локации его персонажа
  public selectedAction: ACTION_UI = ACTION_UI.None;
  //видимость экрана сцены и панели персонажа игрока
  public visibleSceneAndUserPanel: boolean = false;
  //текущий персонаж игрока
  public currentUserId: number = 0;
  public currentUserBg: string = '';
  public currentUserImg: string = 'human';
  public currentUserHp: number = 0;
  public currentUserHpMax: number = 0;
  public currentUserForce: number = 0;
  public currentUserForceMax: number = 0;
  //игровые объекты сцены персонажа игрока
  public sceneGameObjects: IconBtn[] = [];
  //действия персонажа игрока
  public currentUserActions: IconBtn[] = [];
  //кнопки меню
  public menuBtns: IconBtn[] = [];
  ////////////////////////

  public constructor() {
    super();
    this.typeObj = GAME_OBJ_NAMES.Game;
    Game.game = this;

    this.currentUserActions = [
      {
        name: 'Сила',
        img: '/menu/force',
        action: () => {
          this.selectedAction = ACTION_UI.Force;
        }
      },
      /*
       name: 'Обмен вещами',
        //     img: new URL('/src/assets/img/menu/trade.jpg',
      */
      {
        name: 'Предмет',
        img: '/menu/item',
        action: () => {
          this.selectedAction = ACTION_UI.Item;
        }
      },
    ];

    this.initMenu();

    this.dialog = new DialogNewGame();
  }

  public initMenu() {
    this.menuBtns = [
      {
        name: 'Новая игра',
        img: '/menu/new.jpg',
        action: this.restart,
      },
      // {
      //     name: 'Загрузка и сохранение',
      //     img: new URL('/src/assets/img/menu/save.jpg',
      //         import.meta.url).href
      // },
    ];
  }

  public addHero(hero: GameObject) {
    this.playerHeroesIds.push(hero.id);
  }
  public removeHero(hero: GameObject) {
    this.playerHeroesIds = this.playerHeroesIds.filter(id => id === hero.id);
  }
  public nextHero() {
    const oldId = this.playerHeroesIds.shift();
    this.playerHeroesIds.push(oldId);

    this.currentUserId = this.playerHeroesIds[0];

    const hero = this.gameObjects.find(obj => obj.id === this.currentUserId);
    if (hero) {
      this.currentUserBg = '';
      this.currentUserImg = 'human';
      this.currentUserHp = 0;
      this.currentUserHpMax = 0;
      this.currentUserForce = 0;
      this.currentUserForceMax = 0;
      this.currentUserActions = [];
      this.menuBtns = [];
    }
  }

  public getGameObject(idObj: number): THaveType<GameObject> {
    return this.gameObjects.find(({ id }) => id === idObj);
  }
  public addGameObject(obj: GameObject) {
    this.idCounter += 1;
    obj.id = this.idCounter;
    this.gameObjects.push(obj);
  }
  public removeGameObject(id: number) {
    this.gameObjects = this.gameObjects.filter(obj => obj.id === id);
  }

  public startBattle(unitsIds: number[]) {
    this.battleMembersIds = unitsIds;
    this.menuBtns = [];
  }
  public endBattle() {
    this.battleMembersIds = [];
  }

  public restart() {
    this.needRestart = true;
  }
}