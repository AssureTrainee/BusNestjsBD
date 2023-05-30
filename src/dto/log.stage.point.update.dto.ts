import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LogStagePointUpdateDto {
  @IsNotEmpty({ message: 'Please provide a checkedAt.' })
  @ApiProperty({ type: Date, description: 'checkedAt' })
  checkedAt: string;
}
