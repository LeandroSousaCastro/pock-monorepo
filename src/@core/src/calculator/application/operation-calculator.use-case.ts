import UseCase from "../../@seedwork/application/use-case";
import { Calculator } from "../domain/entities/calculator";
import CalculatorRepository from "../domain/repositories/calculator-repository-interface";


export default class OperationCalculatorUseCase implements UseCase<Input, Output> {
    constructor(private calculatorRepository: CalculatorRepository) { }

    async execute(input: Input): Promise<Output> {
        const entity = new Calculator(input);
        await this.calculatorRepository.insert(entity);
        return {
            result: entity.result
        }
    }
}

export type Input = {
    expression: string
}

export type Output = {
    result: number | undefined
}
