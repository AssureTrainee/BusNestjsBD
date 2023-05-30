import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base/base.entity';
import { PassengerEntity } from "./passenger.entity";
import { AccountTypeEntity } from "./account.type.entity";

export class PassengerAccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'passenger_account_id' })
    passengerAccountId: string;

    @Column({ name: 'balance' })
    balance: number;

    @Column({ name: 'status', length: 100 })
    status: string;

    // @Column('uuid', { name: 'passenger_id', nullable: true })
    // @OneToOne(() => PassengerEntity)
    @JoinColumn({ name: 'passenger_id' })
    Passenger: PassengerEntity;

    // @Column('uuid', { name: 'account_type_id', nullable: true })
    // @OneToOne(() => AccountTypeEntity)
    @JoinColumn({ name: 'account_type_id' })
    AccountType: AccountTypeEntity;
}