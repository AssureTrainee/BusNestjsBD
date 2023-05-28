import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PersonEntity } from './person.entity';
import { BaseEntity } from './base/base.entity';

@Entity('owner')
export class OwnerEntity extends BaseEntity {
  @Column({ name: 'status', length: 100 })
  status: string;

  @Column('uuid', { name: 'person_id', nullable: true })
  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  user: PersonEntity;
}
