import { GameObject } from "@/classes/game-objects/GameObject";

//это объекты, находящиеся в локации(строковый энам)
export class SceneObject extends GameObject {
    public location: string;

    public constructor(location: string) {
        super();
        this.location = location;
    }
}