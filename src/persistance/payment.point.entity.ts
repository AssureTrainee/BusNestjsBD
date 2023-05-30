import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { StationEntity } from './station.entity';
// import { StationEntity } from './station.entity';

@Entity('payment_point')
export class PaymentPointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'payment_point_id' })
  paymentpointId: string;

  @Column({ default: 'active', enum: ['active', 'inactive'] })
  status: string;

  @Column({
    type: 'text',
    unique: true,
  })
  code: string;

  // @OneToOne(() => StationEntity)
  @JoinColumn({ name: 'station_id' })
  Station: StationEntity;

  @BeforeInsert()
  generateCode() {
    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');

    this.code = `CODE-${timestamp}-${randomDigits}`;
  }
}
