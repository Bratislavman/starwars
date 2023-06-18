import { MISSION } from "@/constants/enums";
import { Game } from "@/classes/Game";

export class Mission {
    public id: MISSION;

    public constructor(id: MISSION) { 
        this.id = id;
        Game.game.mission = this;
    }

    //проверка после игрового действия на то, что задачи игры выполнены/проиграны
    public questsMiddlwhere(action: Function) {
      action();
      if (this.checkMissionStatus()) {
        this.end()
      }
    }

    //проверка статуса задач(когда все завершены - проиграны или выполнены)
    public checkMissionStatus() {
      return false;
    }

    //конец миссии
    public end() {
      return false;
    }
}