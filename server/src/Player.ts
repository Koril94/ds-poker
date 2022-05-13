export class Player {
    id: string;
    name: string;
    value: string;

    constructor() {
        this.id = Math.random().toString(36).substring(3,9);
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