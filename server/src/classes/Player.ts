export class Player {
    id: string;
    name: string;
    value: string;

    constructor(playerID: string) {
        this.id = playerID;
        this.name = "";
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