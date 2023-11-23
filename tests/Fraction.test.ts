import Fraction from "../src/Structures/Fraction";

interface IFrac {
    a: number;
    b: number;
}

interface IBinaryFractionFunction {
    a: IFrac;
    b: IFrac;
    expect: IFrac;
}

describe("Test sum/add method", () => {
    const tests: IBinaryFractionFunction[] = [
        { // 0
            a: {a: 1, b: 2},
            b: {a: 2, b: 3},
            expect: {a: 7, b: 6}
        },
        { // 1
            a: {a: 1, b: 2},
            b: {a: 2, b: 4},
            expect: {a: 8, b: 8}
        },
        { // 2
            a: {a: -1, b: 2}, // -2/4 + 2/4
            b: {a: 2, b: 4},
            expect: {a: 0, b: 8}
        },
        { // 3
            a: {a: -1, b: -2},
            b: {a: 2, b: 4},
            expect: {a: 8, b: 8}
        },
        { // 4
            a: {a: 1, b: 2},
            b: {a: -2, b: -4},
            expect: {a: 8, b: 8}
        },
        { // 5
            a: {a: 1, b: -2}, // -2/4 + 2/4
            b: {a: 2, b: 4},
            expect: {a: 0, b: 8}
        },
    ];

    for (let i = 0; i < tests.length; i++) {
        test(`sum/add ${i}`, () => {
            const x = new Fraction(tests[i].a.a, tests[i].a.b);
            const y = new Fraction(tests[i].b.a, tests[i].b.b);
            // (1/2) + (2/3) = (3/6) + (4/6) = 7/6
            const z = x.sum(y);
            const num = tests[i].expect.a;
            const denom = tests[i].expect.b;
            expect(z.getNumerator()).toBe(num);
            expect(z.getDenominator()).toBe(denom);
            x.add(y);
            expect(z.getNumerator()).toBe(num);
            expect(z.getDenominator()).toBe(denom);
        })
    }
})

describe("Test difference/sub method", () => {
    const tests: IBinaryFractionFunction[] = [
        { // 0
            a: {a: 1, b: 2},
            b: {a: 2, b: 3},
            expect: {a: -1, b: 6}
        },
        { // 1
            a: {a: 1, b: 2},
            b: {a: 2, b: 4},
            expect: {a: 0, b: 8}
        },
        { // 2
            a: {a: -1, b: 2}, // -2/4 - 2/4
            b: {a: 2, b: 4},
            expect: {a: -8, b: 8}
        },
        { // 3
            a: {a: -1, b: -2},
            b: {a: 2, b: 4},
            expect: {a: 0, b: 8}
        },
        { // 4
            a: {a: 1, b: 2},
            b: {a: -2, b: -4},
            expect: {a: 0, b: 8}
        },
        { // 5
            a: {a: 1, b: -2}, // -2/4 - 2/4
            b: {a: 2, b: 4},
            expect: {a: -8, b: 8}
        },
    ];

    for (let i = 0; i < tests.length; i++) {
        test(`sum/add ${i}`, () => {
            const x = new Fraction(tests[i].a.a, tests[i].a.b);
            const y = new Fraction(tests[i].b.a, tests[i].b.b);
            // (1/2) + (2/3) = (3/6) + (4/6) = 7/6
            const z = x.difference(y);
            const num = tests[i].expect.a;
            const denom = tests[i].expect.b;
            expect(z.getNumerator()).toBe(num);
            expect(z.getDenominator()).toBe(denom);
            x.subtract(y);
            expect(z.getNumerator()).toBe(num);
            expect(z.getDenominator()).toBe(denom);
        })
    }
})

describe("Test getDecimal method", () => {
    test("getDecimal 0", () => {
        expect(new Fraction(1, 2).decimal).toBe(0.5);
    })
    test("getDecimal 1", () => {
        expect(new Fraction(1, 4).decimal).toBe(0.25);
    })
    test("getDecimal 2", () => {
        expect(new Fraction(1, 8).decimal).toBe(0.125);
    })
});

describe("Test simplify method", () => {
    test("simplify 0", () => {
        const f = new Fraction(8, 8);
        f.simplify();
        assertFraction(f, 1, 1);
    })
    test("simplify 1", () => {
        const f = new Fraction(1, 8);
        f.simplify();
        assertFraction(f, 1, 8);
    })
    test("simplify 2", () => {
        const f = new Fraction(15, 3);
        f.simplify();
        assertFraction(f, 5, 1);
    })
    test("simplify 3", () => {
        const f = new Fraction(36, 48); // 18 / 24 -> 9 / 12 -> 3 / 4
        f.simplify();
        assertFraction(f, 3, 4);
    })
    test("simplify 4", () => {
        const f = new Fraction(2777, 7901); // both prime numbers
        f.simplify();
        assertFraction(f, 2777, 7901);
    })
})

function assertFraction(f: Fraction, a: number, b: number) {
    expect(f.getNumerator()).toBe(a);
    expect(f.getDenominator()).toBe(b);
}