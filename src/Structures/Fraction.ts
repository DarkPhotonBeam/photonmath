export default class Fraction {
    private a: number; // numerator
    private b: number; // denominator

    constructor(a: number = 0, b: number = 1) {
        this.a = Math.floor(a);
        this.b = b === 0 ? 1 : Math.floor(b);
        this.normalizeSign();
    }

    get decimal() {
        return this.a / this.b;
    }

    public sum(f: Fraction): Fraction {
        return new Fraction(this.a * f.b + f.a * this.b, f.b * this.b);
    }

    public add(f: Fraction): void {
        this.a *= f.b;
        this.a += f.a * this.b;
        this.b *= f.b;
        this.normalizeSign();
    }

    public difference(f: Fraction): Fraction {
        return new Fraction(this.a * f.b - f.a * this.b, f.b * this.b);
    }

    public subtract(f: Fraction): void {
        this.a *= f.b;
        this.a -= f.a * this.b;
        this.b *= f.b;
        this.normalizeSign();
    }

    public product(f: Fraction): Fraction {
        return new Fraction(this.a * f.a, this.b * f.b);
    }

    public multiply(f: Fraction): void {
        this.a *= f.a;
        this.b *= f.b;
    }

    public getNumerator(): number {
        return this.a;
    }

    public getDenominator(): number {
        return this.b;
    }

    private normalizeSign(): void {
        if (this.b < 0) {
            this.a *= -1;
            this.b *= -1;
        }
    }
}