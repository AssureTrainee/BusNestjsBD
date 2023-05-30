import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetailStagePointEntity } from './detail.stage.point.entity';
import { BaseEntity } from './base/base.entity';

@Entity('log_stage_point')
export class LogStagePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'log_stage_point_id' })
  logPtagePointId: string;

  @JoinColumn({ name: 'detail_stage_point_id' })
  @ManyToOne(() => DetailStagePointEntity)
  detailStagePointId: DetailStagePointEntity;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'checked_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  checkedAt: Date;
}
