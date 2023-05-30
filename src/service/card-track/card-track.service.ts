import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityService } from '../activity/activity.service';
import { CardTrackEntity } from 'src/persistance/card.track.entity';
import { CardTrackUpdateDto } from 'src/dto/card.track.update.dto';
import { CardTrackDto } from 'src/dto/card.track.dto';

@Injectable()
export class CardTrackService {
  constructor(
    @InjectRepository(CardTrackEntity)
    private cardTrackRepository: Repository<CardTrackEntity>,
    @Inject(forwardRef(() => ActivityService))
    private activityService: ActivityService,
  ) {}

  async findAllCardsTracks() {
    return this.cardTrackRepository.find();
  }

  async findCardTrackById(cardTrackId: string) {
    const cardTrack = this.cardTrackRepository.findOne({
      where: { cardTrackId },
    });
    if (!cardTrack) {
      throw new NotFoundException(
        `Activity with this id: ${cardTrack} not found`,
      );
    }
    return cardTrack;
  }

  async createCardTrack(cardTrackData: CardTrackDto) {
    const cardTrackInfo: CardTrackUpdateDto = { ...cardTrackData };
    const activity = await this.activityService.findActivityById(
      cardTrackData.activityId,
    );

    if (!activity) {
      throw new NotFoundException();
    }

    const cardTrack = this.cardTrackRepository.create(cardTrackInfo);
    cardTrack.Activity = activity;
    try {
      return this.cardTrackRepository.save(cardTrack);
    } catch (error) {
      throw new ConflictException(
        'There was a conflict when create the card track',
      );
    }
  }

  async updateCardTrack(
    cardtrackId: string,
    cardTrackData: CardTrackUpdateDto,
  ) {
    const cardTrack: CardTrackEntity = await this.findCardTrackById(
      cardtrackId,
    );
    await this.cardTrackRepository.merge(cardTrack, cardTrackData);
    return await this.cardTrackRepository.save(cardTrack);
  }

  async deleteCardTrackById(cardtrackId: string) {
    const result = await this.findCardTrackById(cardtrackId);
    await this.cardTrackRepository.remove(result);
    return true;
  }
}
