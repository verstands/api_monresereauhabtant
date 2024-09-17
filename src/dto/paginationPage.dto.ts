import { IsNumber, IsOptional, Min } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @IsNumber({}, { message: 'Skip must be a number' })
  @Min(0, { message: 'Skip must be a positive number' })
  skip: number;

  @IsOptional()
  @IsNumber({}, { message: 'Limit must be a number' })
  @Min(1, { message: 'Limit must be a positive number' })
  limit: number;
}