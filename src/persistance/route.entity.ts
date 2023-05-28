import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('route')
export class RouteEntity extends BaseEntity {
  @Column({ name: 'name', length: 100 })
  name: string;

  @Column({ name: 'status', length: 100 })
  status: string;

  @Column({ name: 'length' })
  length: number;
}
