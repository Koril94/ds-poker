export class Player {
    id: String;
    name: String;
    value: String;

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

    setName(name: String) {
        this.name = name;
    }

    setValue(value: String) {
        this.value = value;
    }
}