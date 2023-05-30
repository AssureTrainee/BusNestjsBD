import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogStagePointDto } from 'src/dto/log.stage.point.dto';
import { LogStagePointUpdateDto } from 'src/dto/log.stage.point.update.dto';
import { LogStagePointEntity } from 'src/persistance/log.stage.point.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogStagePointService {
  constructor(
    @InjectRepository(LogStagePointEntity)
    private logStagePointRepository: Repository<LogStagePointEntity>,
  ) {}

  async findAllLogStagePoints(): Promise<LogStagePointEntity[]> {
    return await this.logStagePointRepository.find();
  }

  async createLogStagePoint(logStagePointData: LogStagePointDto) {
    const logStagePoint =
      this.logStagePointRepository.create(logStagePointData);
    try {
      return await this.logStagePointRepository.save(logStagePoint);
    } catch (error) {
      throw new ConflictException(
        'There was a conflict when create the log stage point',
      );
    }
  }

  async findLogStagePointById(logStagePointId: string) {
    const logStagePoint = await this.logStagePointRepository.findOneBy({
      logStagePointId,
    });
    if (!logStagePoint) {
      throw new NotFoundException(
        `LogStagePoint with this id: ${logStagePointId} not found`,
      );
    }
    return logStagePoint;
  }

  async updateLogStagePoint(
    id: string,
    logStagePointUpdate: LogStagePointUpdateDto,
  ) {
    const logStagePoint: LogStagePointEntity = await this.findLogStagePointById(
      id,
    );
    await this.logStagePointRepository.merge(
      logStagePoint,
      logStagePointUpdate,
    );
    return await this.logStagePointRepository.save(logStagePoint);
  }

  async deleteLogStagePoint(id: string) {
    const result = await this.logStagePointRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`LogStagePoint with ID "${id}" not found`);
    }
  }
}
