import { GameObject } from "@/classes/game-objects/GameObject";

//это объекты, находящиеся на сцене, то есть в локации, где сейчас персонаж
export class SceneObject extends GameObject {
    //для енама мисси
    public location: string;

    public constructor(location: string) {
        super();
        this.location = location;
    }
}