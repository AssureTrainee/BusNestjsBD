import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('route')
export class RouteEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'route_id' })
  routeId: string;

  @Column({ name: 'name', length: 100 })
  name: string;

  @Column({ name: 'status', length: 100 })
  status: string;

  @Column({ name: 'length' })
  length: number;
}
