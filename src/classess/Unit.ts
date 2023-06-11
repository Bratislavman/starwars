import { OBJ_CLASSES } from "../constants/constants";
import { Direction, OBJ_NAMES_CLASSES } from "../constants/enums";


export class Unit {

    public id: number;
    public name1: string;
    public unitsIds: number[];
    public direction: Direction;
    public typeObj: OBJ_NAMES_CLASSES;

    public constructor(id: number, name1: string, direction: Direction, unitsIds = []) { 


      this.id = id;
      this.name1 = name1;
      this.unitsIds = unitsIds;
      this.direction = direction;
      this.typeObj = OBJ_NAMES_CLASSES.Unit;
    }

    public say() {
      console.log(4444);
    }
}