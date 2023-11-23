import Fraction from "./Fraction";
import ComplexNumber from "./ComplexNumber";
import Integer from "./Integer";

export type ConstantType = 'integer' | 'rational' | 'real' | 'complex';
export type ConstantValue = Fraction | ComplexNumber | Integer | number;

export default class Constant {
    private type: ConstantType;
    private value: ConstantValue;

    constructor(value: ConstantValue, type: ConstantType) {
        this.value = value;
        this.type = type;
    }

    public getType() {
        return this.type;
    }

    public getValue() {
        return this.value;
    }
}