import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ItineraryEntity } from './itineraty.entity';
import { RouteEntity } from './route.entity';

@Entity('activity')
export class ActivityEntity extends BaseEntity {
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
  itineraryId: ItineraryEntity;

  @JoinColumn({ name: 'route_id' })
  @ManyToOne(() => RouteEntity)
  route: RouteEntity;
}
