import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from './base/base.entity';
import { OwnerEntity } from './owner.entity';

@Entity('bus')
export class BusEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'bus_id' })
  busId: string;

  @Column({ name: 'internal_bus' })
  internalBus: number;

  @Column({ name: 'capacity' })
  capacity: number;

  @Column({ name: 'status', length: 100 })
  status: string;

  @ManyToOne(() => OwnerEntity)
  @JoinColumn({ name: 'owner_id' })
  Owner: OwnerEntity;
}
