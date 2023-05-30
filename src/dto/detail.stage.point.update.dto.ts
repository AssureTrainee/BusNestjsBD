import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsOptional } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class DetailStagePointUpdateDto {
  @IsDate({ message: 'Please provide a arrival time.' })
  @IsOptional()
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  checkAt: Date;

  @ApiProperty({ type: UUID, description: 'stagePointId' })
  @IsUUID('all', { message: 'Stage Point Id must be of type id.' })
  @IsOptional()
  stagePointId: string;
}
