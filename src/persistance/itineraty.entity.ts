import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { DriverEntity } from './driver.entity';

@Entity('itinerary')
export class ItineraryEntity extends BaseEntity {
  @Column({ name: 'description', length: 100 })
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'date',
  })
  date: Date;

  @JoinColumn({ name: 'driver_id' })
  @ManyToOne(() => DriverEntity)
  driverId: DriverEntity;

  //Falta Implementacion de BusEntity
  //   @JoinColumn({ name: 'bus_id' })
  //   @ManyToOne(() => BusEntity)
  //   bus: BusEntity;
}
