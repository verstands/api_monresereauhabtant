import { IsNumber, IsOptional } from "class-validator";

export class PaginationDto {
    @IsNumber()
    @IsOptional()
    skip : number;

    @IsNumber()
    @IsOptional()
    limit: number;
}