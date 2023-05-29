import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ActivityEntity } from './activity.entity';
import { BaseEntity } from './base/base.entity';

@Entity('CardTrackEntity')
export class CardTrackEntity extends BaseEntity {
  @Column({ name: 'code', length: 100 })
  code: string;

  @Column({ name: 'code', length: 100 })
  details: string;

  @Column({ name: 'code', length: 100 })
  status: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'departure_time',
  })
  departureTime: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'arrival_time',
  })
  arrivalTime: Date;

  @JoinColumn({ name: 'activity_id' })
  @ManyToOne(() => ActivityEntity)
  activity: ActivityEntity;
}
