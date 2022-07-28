import {
  OperationCalculator,
  GetCalculator,
  ListCalculator,
} from '@ms/calc-app/calculator/application';
import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { OperationCalculatorDto } from './dto/operation-calculator.dto';

@Controller('calculator')
export class CalculatorController {
  @Inject(OperationCalculator.UseCase)
  private operationUseCase: OperationCalculator.UseCase;

  @Inject(GetCalculator.UseCase)
  private getUseCase: GetCalculator.UseCase;

  @Inject(ListCalculator.UseCase)
  private listUseCase: ListCalculator.UseCase;

  @Post()
  operation(@Body() operationCalculatorDto: OperationCalculatorDto) {
    return this.operationUseCase.execute(operationCalculatorDto);
  }

  @Get()
  findAll() {
    return this.listUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getUseCase.execute({ id });
  }
}
