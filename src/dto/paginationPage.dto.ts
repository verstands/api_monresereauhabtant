import { IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Skip must be a number' })
  @Min(0, { message: 'Skip must be a positive number' })
  skip: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit must be a number' })
  @Min(1, { message: 'Limit must be a positive number' })
  limit: number = DEFAULT_PAGE_SIZE; 
}
