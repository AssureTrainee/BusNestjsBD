import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from './base/base.entity';
import { PassengerEntity } from './passenger.entity';
import { AccountTypeEntity } from "./account-type.entity";

@Entity('passenger_account')
export class passengerAccountEntity extends BaseEntity {
    @Column({ name: 'balance' })
    balance: number;

    @Column({ name: 'status', length: 100 })
    status: string;

    @Column('uuid', { name: 'passenger_id', nullable: true })
    @OneToOne(() => PassengerEntity)
    @JoinColumn({ name: 'passenger_id' })
    passenger: PassengerEntity;

    @Column('uuid', { name: 'account_type_id', nullable: true })
    @OneToOne(() => AccountTypeEntity)
    @JoinColumn({ name: 'account_type_id' })
    account: AccountTypeEntity;
}