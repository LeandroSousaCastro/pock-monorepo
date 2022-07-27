import CalculatorValidatorFactory, { CalculatorRules, CalculatorValidator } from "./calculator-validator";

describe("Testes de CalculatorValidator", () => {
    let validator: CalculatorValidator;

    beforeEach(() => validator = CalculatorValidatorFactory.create());

    it("deve testear casos inválidos de expressões", () => {
        let isValid = validator.validate(null);
        expect(isValid).toBeFalsy();
        expect(validator.errors['expression']).toStrictEqual([
            'expression should not be empty',
            'expression must be a string'
        ]);

        isValid = validator.validate({ expression: "" });
        expect(isValid).toBeFalsy();
        expect(validator.errors['expression']).toStrictEqual([
            'expression should not be empty',
        ]);

        isValid = validator.validate({ expression: 5 });
        expect(isValid).toBeFalsy();
        expect(validator.errors['expression']).toStrictEqual([
            'expression must be a string',
        ]);
    });

    it("deve testear casos válidos de expressões", () => {
        const arrange = [
            { expression: "1 + 1" },
            { expression: "2 - 1" },
            { expression: "2 * 2" },
            { expression: "4 / 2" }
        ];

        arrange.forEach((value) => {
            const isValid = validator.validate(value);
            expect(isValid).toBeTruthy();
            expect(validator.errors).toBeNull();
            expect(validator.validateData).toStrictEqual(new CalculatorRules(value));
        });
    });
});