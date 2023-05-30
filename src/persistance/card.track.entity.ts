import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActivityEntity } from './activity.entity';
import { BaseEntity } from './base/base.entity';

@Entity('card_track')
export class CardTrackEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'card_track_id' })
  cardTrackId: string;

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
