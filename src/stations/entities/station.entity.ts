import { BeforeInsert,  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Station {
  @PrimaryGeneratedColumn('uuid', {name: 'station_id'})
  id: string;

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

// name
// addess
// code
