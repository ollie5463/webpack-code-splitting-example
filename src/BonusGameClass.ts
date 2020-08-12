import { IGame } from './IGame';

export class BonusGameClass implements IGame { 
    public loadedMessage: string;
    constructor() {
        this.loadedMessage = "I am Bonus Game code";
    }
    public sayHi(): string {
        return this.loadedMessage;
    }
}