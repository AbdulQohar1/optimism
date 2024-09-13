import {IsNumber, IsPositive, IsOptional} from "class-validator"

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @IsPositive()
  skip: number;

  @IsNumber()
  @IsPositive()
  @IsPositive()
  limit: number
}