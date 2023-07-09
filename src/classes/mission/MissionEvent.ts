export class MissionEvent {
  public eventName: string;

  public constructor(eventName: string, data: any) {
    this.eventName = eventName;
  }
}