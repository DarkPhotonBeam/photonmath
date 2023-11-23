import Fraction from "../Fraction";

type MathematicalTerm = Term | number | Fraction;

type Constant = Fraction | number;

export default class Term {
    public term: string;

    constructor(term: string) {
        this.term = term;
    }

    private parse() {
        const factors = this.term.split("*");

    }
}

export class Variable {
    symbol: string;

    constructor(symbol: string) {
        this.symbol = symbol;
    }
}