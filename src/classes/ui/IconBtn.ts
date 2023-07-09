export class IconBtn {
    public name: string;
    public img: string;
    public action: Function;

    public constructor(name: string, icon: string, action: Function) { 
      this.name = name;
      this.img = icon;
      this.action = action;
    }
}