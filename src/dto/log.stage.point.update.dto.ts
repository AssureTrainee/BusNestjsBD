import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class LogStagePointUpdateDto {
  @IsString({ message: 'checkedAt must be a date.' })
  @IsNotEmpty({ message: 'Please provide a checkedAt.' })
  @ApiProperty({ type: Date, description: 'checkedAt' })
  checkedAt: Date;
}
