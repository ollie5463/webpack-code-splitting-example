import { IGame } from './IGame';

export class BaseGameClass implements IGame { 
    public loadedMessage: string;
    constructor() {
        this.loadedMessage = "I am Base Game code";
    }
    public sayHi(): string {
        return this.loadedMessage;
    }
}