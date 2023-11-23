export default class Integer {
    private readonly value: number;

    constructor(value, round: boolean = false) {
        this.value = round ? Math.round(value) : Math.floor(value);
    }

    public getValue() {
        return this.value;
    }
}
