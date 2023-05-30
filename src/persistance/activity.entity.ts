import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItineraryEntity } from './itineraty.entity';
import { RouteEntity } from './route.entity';
import { BaseEntity } from './base/base.entity';

@Entity('activity')
export class ActivityEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'activity_id' })
  activityId: string;

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

  @Column({ name: 'details' })
  details: string;

  @JoinColumn({ name: 'itineraty_id' })
  @ManyToOne(() => ItineraryEntity)
  Itinerary: ItineraryEntity;

  @JoinColumn({ name: 'route_id' })
  @OneToOne(() => RouteEntity)
  Route: RouteEntity;
}
