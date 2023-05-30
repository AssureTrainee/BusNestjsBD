import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailStagePointDto } from 'src/dto/detail.stage.point.dto';
import { DetailStagePointEntity } from 'src/persistance/detail.stage.point.entity';
import { Repository } from 'typeorm';
import { DetailStagePointUpdateDto } from '../../dto/detail.stage.point.update.dto';
import { StagePointService } from '../stage-point/stage-point.service';
import { CardTrackService } from '../card-track/card-track.service';

@Injectable()
export class DetailStagePointService {
  constructor(
    @InjectRepository(DetailStagePointEntity)
    private detailStagePointRepository: Repository<DetailStagePointEntity>,
    @Inject(forwardRef(() => StagePointService))
    private stagePointService: StagePointService,
    @Inject(forwardRef(() => CardTrackService))
    private cardTrackService: CardTrackService,
  ) {}

  async findAllDetailStagePoints(): Promise<DetailStagePointEntity[]> {
    return await this.detailStagePointRepository.find();
  }

  async createDetailStagePoint(detailStagePointData: DetailStagePointDto) {
    const stagePointInfo: DetailStagePointUpdateDto = {
      ...detailStagePointData,
    };
    const cardTrack = await this.cardTrackService.findCardTrackById(
      detailStagePointData.cardTrackId,
    );
    const stagePoint = await this.stagePointService.findStagePointById(
      detailStagePointData.stagePointId,
    );
    if (!cardTrack && !stagePoint) {
      throw new NotFoundException();
    }

    const detailStagePoint =
      this.detailStagePointRepository.create(stagePointInfo);
    detailStagePoint.CardTrack = cardTrack;
    detailStagePoint.StagePoint = stagePoint;
    try {
      return this.detailStagePointRepository.save(detailStagePoint);
    } catch (error) {
      throw new ConflictException(
        'There was a conflict when create the detail stage point',
      );
    }
  }

  async findDetailStagePointById(detailStagePointId: string) {
    const detailStagePoint = await this.detailStagePointRepository.findOneBy({
      detailStagePointId,
    });
    if (!detailStagePoint) {
      throw new NotFoundException(
        `detailStagePoint with this id: ${detailStagePointId} not found`,
      );
    }
    return detailStagePoint;
  }

  async updateDetailStagePoint(
    id: string,
    detailStagePointUpdate: DetailStagePointUpdateDto,
  ) {
    const detailStagePoint: DetailStagePointEntity =
      await this.findDetailStagePointById(id);
    await this.detailStagePointRepository.merge(
      detailStagePoint,
      detailStagePointUpdate,
    );
    return await this.detailStagePointRepository.save(detailStagePoint);
  }

  async deleteDetailStagePoint(id: string) {
    const result = await this.findDetailStagePointById(id);
    await this.detailStagePointRepository.remove(result);
    return true;
  }
}
