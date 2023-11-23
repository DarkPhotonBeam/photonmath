import Constant from "../Constant";
import Fraction from "../Fraction";

export type TermNodeType = 'constant' | 'addition' | 'multiplication';

export default class TermNode {

    protected type: TermNodeType;
    protected children: TermNode[];
    protected parent: TermNode | null;
    protected value: Fraction | null;

    constructor(type: TermNodeType = 'constant', value: Fraction | null = null) {
        this.type = type;
        this.children = [];
        this.parent = null;
        this.value = value;
    }

    public evaluate(): Fraction | null {
        if (this.type === 'constant') return null;
        const value = new Fraction(this.type === 'multiplication' ? 1 : 0, 1);
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.getType() !== 'constant') return null;
            if (this.type === 'multiplication') {
                value.multiply(child.getValue());
            } else {
                value.add(child.getValue());
            }
        }
        this.type = 'constant';
        this.value = value;
        this.children = [];
        return this.value;
    }

    public addChild(child: TermNode) {
        this.children.push(child);
    }

    public getType() {
        return this.type;
    }

    public getChildren() {
        return this.children;
    }

    public getParent() {
        return this.parent;
    }

    public getValue() {
        return this.value;
    }

}