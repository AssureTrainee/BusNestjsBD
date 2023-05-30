import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetailStagePointEntity } from './detail.stage.point.entity';
import { BaseEntity } from './base/base.entity';

@Entity('log_stage_point')
export class LogStagePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'log_stage_point_id' })
  logStagePointId: string;

  @JoinColumn({ name: 'detail_stage_point_id' })
  @OneToOne(() => DetailStagePointEntity)
  DetailStagePoint: DetailStagePointEntity;

  @Column({ name: 'checked_at', length: 100 })
  checkedAt: string;
}
