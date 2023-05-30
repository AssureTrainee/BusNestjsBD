import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class LogStagePointUpdateDto {
  @IsNotEmpty({ message: 'Please provide a checkedAt.' })
  @ApiProperty({ type: Date, description: 'checkedAt' })
  checkedAt: string;
}
