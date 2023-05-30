import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class LogStagePointDto {
  @ApiProperty({ type: UUID, description: 'detailStagePointId' })
  @IsUUID('all', { message: 'detail Stage Point Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a detailStagePointId.' })
  detailStagePointId: string;

  @IsNotEmpty({ message: 'Please provide a checkedAt.' })
  @ApiProperty({ type: Date, description: 'checkedAt' })
  checkedAt: string;
}
