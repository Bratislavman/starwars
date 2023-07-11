import { GAME_OBJ_NAMES, ACTION_UI } from "@/constants/enums";
import { GameObject } from "@/classes/game-objects/GameObject";
import { Mission } from '@/classes/mission/Mission';
import { Dialog } from '@/classes/dialog/Dialog';
import { DialogNewGame } from '@/classes/dialog/DialogNewGame';
import { IconBtn } from '@/classes/ui/IconBtn';
import { THaveType } from '@/constants/types';
import { Character } from '@/classes/game-objects/charatcer/Character';
import { SceneObject } from '@/classes/game-objects/SceneObject';
import { Characteristick } from "@/classes/game-objects/Characteristick";
import { CHARACTERISTICK } from "@/constants/enums";
import { TEAM } from "@/constants/enums";

export class Game extends GameObject {
  public static game: THaveType<Game> = null;

  //каунтер для айдишек всех игр объектов
  public idCounter: number = 0;
  //все игр объекты
  public gameObjects: GameObject[] = [];

  //текущая миссия
  public mission: THaveType<Mission> = null;
  //пройденные мисссии
  //public missionCompletedIds: number[] = null;

  //модалка
  public dialog: THaveType<Dialog> = null;
  //собирательный текст модального окна во время действий c множеством последствий(обыч атака персонажа может сразу убить врага или даже врагов)
  public dialogText: string = '';

  //участники текущего боя
  public battleMembersIds: number[] = [];
  //айди текущего персонажа, который ходит
  public battleMemberId: number = 0;

  //персонажи игрока
  public playerHeroesIds: number[] = [];
  //текущий персонаж игрока
  public currentHeroId: number = 0;

  //рестарт
  public needRestart: boolean = false;

  //интерфейс/////////////
  //выбранное действие, которое игрок применит к игр объекту в локации его персонажа
  public selectedAction: ACTION_UI = ACTION_UI.None;
  //видимость экрана сцены и панели персонажа игрока
  public visibleSceneAndUserPanel: boolean = false;
  //характеристики персонажа игрока
  public currentHeroBg: string = '';
  public currentHeroImg: string = 'human';
  public currentHeroHp: number = 0;
  public currentHeroHpMax: number = 0;
  public currentHeroForce: number = 0;
  public currentHeroForceMax: number = 0;
  //игровые объекты сцены(персонажи игрока и враги в бою либо плашки активностей вне боя)
  public sceneGameObjects: IconBtn[] = [];
  //действия персонажа игрока TO DO пока список одинаковый, но мб потом будет менятся
  public currentHeroActions: IconBtn[] = [];
  //кнопки меню
  public menuBtns: IconBtn[] = [];
  ////////////////////////

  public constructor() {
    super();
    this.typeObj = GAME_OBJ_NAMES.Game;
    Game.game = this;
    this.initUserActions();
    this.initMenu();
    this.dialog = new DialogNewGame();
  }

  public initUserActions() {
    const actions = [
      {
        name: 'Действие',
        img: '/menu/tap',
        action: () => {
          this.selectedAction = ACTION_UI.Interaction;
        }
      },
      {
        name: 'Сила',
        img: '/menu/force',
        action: () => {
          this.selectedAction = ACTION_UI.Force;
        }
      },
      {
        name: 'Предмет',
        img: '/menu/item',
        action: () => {
          this.selectedAction = ACTION_UI.Item;
        }
      },
    ];

    this.currentHeroActions = this.battleMembersIds.length ?
      actions
      :
      [
        ...actions,
        {
          name: 'Обмен вещами',
          img: '/menu/trade',
          action: () => {
            this.selectedAction = ACTION_UI.Trade;
          }
        },
      ];
  }

  public initMenu() {
    this.menuBtns = this.battleMembersIds.length ?
      []
      :
      [
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

  //синхронизация текущего персонажа игрока с ui
  public syncHeroUI() {
    const hero = this.getGameObjectById(this.currentHeroId) as Character;
    if (hero) {
      const heroLife = Characteristick.getObjChck(hero, CHARACTERISTICK.Life);
      const heroForce = Characteristick.getObjChck(hero, CHARACTERISTICK.Force);
      this.currentHeroId = hero.id;
      this.currentHeroBg = hero.location;
      this.currentHeroImg = hero.icon;
      this.currentHeroHp = heroLife.value;
      this.currentHeroHpMax = heroLife.max;
      this.currentHeroForce = heroForce.value;
      this.currentHeroForceMax = heroForce.max;
    }
  }
  public addHero(hero: GameObject) {
    this.playerHeroesIds.push(hero.id);
  }
  public removeHero(hero: GameObject) {
    this.playerHeroesIds = this.playerHeroesIds.filter(id => id === hero.id);
  }
  //переход к следующему герою игрока вне боя
  public nextHero() {
    const oldId = this.playerHeroesIds.shift();
    this.playerHeroesIds.push(oldId);
    this.currentHeroId = this.playerHeroesIds[0];
    this.syncHeroUI();
  }

  //получить объекты локации вне боя(плашки и персонажи игрока, тк локация только у них)
  public getLocationGameObjects(location: string): THaveType<SceneObject>[] {
    return (this.gameObjects as SceneObject[]).filter(obj => obj.location === location);
  }
  //получить участников боя в локации(только персонажи)
  public getLocationGameObjectsInBattle(location: string): THaveType<Character>[] {
    return (this.gameObjects as Character[]).filter(obj => obj instanceof Character && obj.location === location);
  }

  public getGameObjectById(idObj: number): THaveType<any> {
    return this.gameObjects.find(({ id }) => id === idObj);
  }
  public getGameObjectsByIds(ids: number[]): THaveType<any> {
    return this.gameObjects.filter(item => ids.includes(item.id))
  }
  public addGameObject(obj: GameObject) {
    this.idCounter += 1;
    obj.id = this.idCounter;
    this.gameObjects.push(obj);
  }
  public removeGameObject(id: number) {
    this.gameObjects = this.gameObjects.filter(obj => obj.id === id);
  }


  public setBattleMode(unitsIds: number[] = []) {
    this.battleMembersIds = unitsIds;
    this.initMenu();
    this.initUserActions();
  }
  public onBattleMode(unitsIds: number[]) {
    this.setBattleMode(unitsIds);
  }
  public offBattleMode() {
    this.setBattleMode([]);
  }
  //переход к следующему персонажу в бою
  //мёртвый враг всё равно находится в очереди как труп, просто его ход пропускается
  public nextHeroInBattle() {

    // const warriors = this.getLocationGameObjectsInBattle(this.battleMembersIds);
    // const playerHeroes = warriors.filter(w => w.team === TEAM.Player && Characteristick.getObjChck(w, CHARACTERISTICK.Life).value > 0);
    // const enemies = warriors.filter(w => w.team !== TEAM.Player && Characteristick.getObjChck(w, CHARACTERISTICK.Life).value > 0);
    // if (playerHeroes.length > 0 && enemies.length === 0) {
    //   //win
    // }

    const oldId = this.battleMembersIds.shift();
    this.battleMembersIds.push(oldId);
    this.battleMemberId = this.battleMembersIds[0];
    const hero = this.getGameObjectById(this.currentHeroId) as Character;
    const heroLife = Characteristick.getObjChck(hero, CHARACTERISTICK.Life);
    if (heroLife.value > 0) {
      if (this.battleMemberId === this.currentHeroId) {
        this.syncHeroUI();
      } else {
        const npc = this.getGameObjectById(this.battleMemberId) as Character;
        npc.battleAI();
      }
    } else {
      this.nextHeroInBattle();
    }
  }

  public restart() {
    this.needRestart = true;
  }
}