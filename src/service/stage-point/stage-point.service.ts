import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteService } from '../route/route.service';
import { StagePointEntity } from 'src/persistance/stage.point.entity';
import { StagePointDto } from 'src/dto/stage.point.dto';
import { StagePointUpdateDto } from 'src/dto/stage.point.update.dto';

@Injectable()
export class StagePointService {
  constructor(
    @InjectRepository(StagePointEntity)
    private stagePointRepository: Repository<StagePointEntity>,
    @Inject(forwardRef(() => RouteService))
    private routeService: RouteService,
  ) {}

  async findAllStagePoints() {
    return this.stagePointRepository.find();
  }

  async findStagePointById(stagePointId: string) {
    const stagePoint = this.stagePointRepository.findOne({
      where: { stagePointId },
    });
    if (!stagePoint) {
      throw new NotFoundException(
        `Activity with this id: ${stagePoint} not found`,
      );
    }
    return stagePoint;
  }

  async createActivity(stagePointData: StagePointDto) {
    const stagePointInfo: StagePointUpdateDto = { ...stagePointData };
    const route = await this.routeService.findRouteById(stagePointData.routeId);
    const stagePoint = await this.findStagePointById(
      stagePointData.stagePointId,
    );
    if (!route && !stagePoint) {
      throw new NotFoundException();
    }

    const stagePointToCreate = this.stagePointRepository.create(stagePointInfo);
    stagePointToCreate.Route = route;
    stagePointToCreate.StagePoint = stagePoint;
    try {
      return this.stagePointRepository.save(stagePointToCreate);
    } catch (error) {
      throw new ConflictException(
        'There was a conflict when create the stage point',
      );
    }
  }

  async updateActivity(
    stagePointId: string,
    stagePointData: StagePointUpdateDto,
  ) {
    const stagePoint: StagePointEntity = await this.findStagePointById(
      stagePointId,
    );
    await this.stagePointRepository.merge(stagePoint, stagePointData);
    return await this.stagePointRepository.save(stagePoint);
  }

  async deleteActivityById(stagePointId: string) {
    const stagePoint = await this.findStagePointById(stagePointId);
    await this.stagePointRepository.remove(stagePoint);
    return true;
  }
}
