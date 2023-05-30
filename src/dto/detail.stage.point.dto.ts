import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsNotEmpty } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class DetailStagePointDto {
  @IsNotEmpty({ message: 'Please provide a checkAt.' })
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  checkAt: string;

  @ApiProperty({ type: UUID, description: 'stagePointId' })
  @IsUUID('all', { message: 'Stage Point Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a stage point id.' })
  stagePointId: string;

  @ApiProperty({ type: UUID, description: 'cardTrackId' })
  @IsUUID('all', { message: 'Card track id id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a card track id id.' })
  cardTrackId: string;
}
