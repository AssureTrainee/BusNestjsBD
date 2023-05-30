import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StagePointEntity } from './stage.point.entity';
import { CardTrackEntity } from './card.track.entity';
import { BaseEntity } from './base/base.entity';

@Entity('detail_stage_point')
export class DetailStagePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'detail_stage_point_id' })
  detailStagePointId: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'checked_at',
  })
  check_at: Date;

  @JoinColumn({ name: 'card_track_id' })
  @ManyToOne(() => CardTrackEntity)
  CardTrack: CardTrackEntity;

  @JoinColumn({ name: 'stage_point_id' })
  @ManyToOne(() => StagePointEntity)
  StagePoint: StagePointEntity;
}
