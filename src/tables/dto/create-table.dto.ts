import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(12)
  @MinLength(3)
  @ApiProperty()
  table: string;
}
