import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { RouteEntity } from './route.entity';

@Entity('stage_point')
export class StagePointEntity extends BaseEntity {
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
