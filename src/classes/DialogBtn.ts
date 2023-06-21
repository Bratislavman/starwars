export class DialogBtn {
    public title: string;
    public disabled: boolean;
    public action: Function;

    public constructor(title: string, action: Function, disabled: boolean = false) { 
      this.title = title;
      this.action = action;
      this.disabled = disabled;
    }
}