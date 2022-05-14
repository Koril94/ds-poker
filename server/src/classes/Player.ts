export class Player {
    id: string;
    name: string;
    value: string;

    constructor(playerID: string, playerName: string) {
        this.id = playerID;
        this.name = playerName;
        this.value = "";
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    setName(name: string) {
        this.name = name;
    }

    setValue(value: string) {
        this.value = value;
    }
}
