import { MISSION } from "@/constants/enums";
import { Game } from "@/classes/game-objects/Game";
import { MissionEvent } from "@/classes/mission/MissionEvent";

enum MissionStatus {
  continue,
  banEnd,
  happyEnd
}

export class Mission {
  public id: MISSION;

  public constructor(id: MISSION) {
    this.id = id;
    Game.game.mission = this;
  }

  public static pushEvent(event: MissionEvent) {
    Game.game.mission.onEvent(event);
  }

  //проверка после игрового действия на то, что задачи игры выполнены/проиграны, после либо след действие, либо конец миссии
  public mussionMiddlwhere(action: Function, actionNext: Function) {
    action();

    switch (this.checkMissionStatus()) {
      case MissionStatus.happyEnd:
        this.happyEnd();
        break;
      case MissionStatus.banEnd:
        this.badEnd();
        break;
      default:
        actionNext();
    }
  }

  //проверка статуса задач
  public checkMissionStatus(): MissionStatus {
    return MissionStatus.continue;
  }

  //конец миссии
  public badEnd() {

  }
  public happyEnd() {

  }

  //принимаем событие от игр объекта 
  public onEvent(event: MissionEvent) {

  }
}