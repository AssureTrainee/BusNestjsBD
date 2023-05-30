import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DriverEntity } from './driver.entity';
import { BaseEntity } from './base/base.entity';
import { BusEntity } from './Bus.entity';

@Entity('itinerary')
export class ItineraryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'itinerary_id' })
  itineraryId: string;

  @Column({ name: 'description', length: 100 })
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'date',
  })
  date: Date;

  @JoinColumn({ name: 'driver_id' })
  @ManyToOne(() => DriverEntity)
  Driver: DriverEntity;

  @JoinColumn({ name: 'bus_id' })
  @ManyToOne(() => BusEntity)
  bus: BusEntity;
}
