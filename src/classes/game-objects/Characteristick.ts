import { CHARACTERISTICK } from "@/constants/enums";

export class Characteristick {
    public type: CHARACTERISTICK;
    public value: number;
    public max: number;

    public constructor(type: CHARACTERISTICK, max: number) { 
      this.type = type;
      this.max = max;
      this.value = max;
    }

    public change(value: number) {
      let val = this.value + value;

      if (val < 0) {
        val = 0;
      } 

      if (val > this.max) {
        val = this.max;
      }

      this.value = val;
    }
}