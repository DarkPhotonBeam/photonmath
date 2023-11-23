export default class NumberTheory {

    public static gcd(a: number, b: number): number {
        let R;
        while ((a % b) > 0) {
            R = a % b;
            a = b;
            b = R;
        }
        return b;
    }

    public static lcm(a: number, b: number): number {
        return (a*b) / this.gcd(a, b);
    }

}