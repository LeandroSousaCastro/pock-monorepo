import { IsNotEmpty, IsString } from "class-validator";
import { ClassValidatorFields } from "../../../@seedwork/domain/validators/class-validator-fields";
import { CalculatorProps } from "../entities/calculator";

export class CalculatorRules {
    @IsString()
    @IsNotEmpty()
    expression: string | undefined;

    constructor({ expression }: CalculatorProps) {
        Object.assign(this, { expression });
    }
}

export class CalculatorValidator
    extends ClassValidatorFields<CalculatorRules> {
    validate(data: any): boolean {
        return super.validate(new CalculatorRules(data ?? {} as any));
    }
}

export default class CalculatorValidatorFactory {
    static create(): CalculatorValidator {
        return new CalculatorValidator();
    }
}
