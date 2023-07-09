export enum GAME_OBJ_NAMES {
    None = 'None',
    Game = 'Game',
}

export enum CHARACTERISTICK {
    Life = 'Жизни',
    Force = 'Сила',
}

export enum TYPE_FORCE {
    Light = 'Светлая',
    Dark = 'Тёмная',
    Neutral = 'Нейтральная',
}

export enum MISSION {
    Zero = 'Нулевая'
}

export enum ACTION_TYPE {
    Attack = 'Attack',
    Evasion = 'Evasion',
}

//действие персонажа к игр объекту в его локации
export enum ACTION_UI {
    //нет действия
    None = 'None',
    //взаимодействие
    Interaction = 'Interaction',
    //применить предмет
    Item = 'Item',
    //применить "силу"
    Force = 'Evasion',
    //обменяться предметами со своим персонажем 
    Trade = 'Trade',
}