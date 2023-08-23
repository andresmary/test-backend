import { PartialType } from '@nestjs/swagger';
import { CreateTableDto } from './index';

export class UpdateTableDto extends PartialType(CreateTableDto) {}
