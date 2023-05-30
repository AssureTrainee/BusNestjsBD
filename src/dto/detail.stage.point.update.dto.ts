import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsOptional } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class DetailStagePointUpdateDto {
  @IsOptional()
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  checkAt: string;

  @ApiProperty({ type: UUID, description: 'stagePointId' })
  @IsUUID('all', { message: 'Stage Point Id must be of type id.' })
  @IsOptional()
  stagePointId: string;
}
