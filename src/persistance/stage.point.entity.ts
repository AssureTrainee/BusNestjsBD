import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RouteEntity } from './route.entity';

@Entity('stage_point')
export class StagePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'stage_point_id' })
  stagePointId: string;

  @Column({ name: 'arrival_time', length: 100 })
  arrivalTime: Date;

  @Column({ name: 'location', length: 100 })
  location: string;

  @Column({ name: 'position' })
  position: number;

  @JoinColumn({ name: 'target_stage_point_id' })
  @OneToOne(() => StagePointEntity)
  targetStagePointId: StagePointEntity;

  @JoinColumn({ name: 'route_id' })
  @ManyToOne(() => RouteEntity)
  route: RouteEntity;
}
