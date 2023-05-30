import { BeforeInsert,  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('station')
export class StationEntity extends BaseEntity{
  @PrimaryGeneratedColumn('uuid', {name: 'station_id'})
  stationId: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column({ type: 'text' })
  address: string;

  @Column({
      type:'text',
      unique:true
  })
  code: string;

  @BeforeInsert()
  generateCode() {
    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');

    this.code = `CODE-${timestamp}-${randomDigits}`;
  }
}
