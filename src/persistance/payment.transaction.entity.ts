import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base/base.entity';
import { PaymentMethodsEntity } from "./payment.method.entity";
import { PassengerAccountEntity } from "./passenger.account.entity";


@Entity('paymentTransaction')
export class PaymentTransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'payment_transaction_id' })
    transactionId: string;

    @Column({ name: 'amount' })
    amount: number;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at'
    })
    createdAt: Date;

    @Column({ name: 'details', length: 100 })
    details: string;

    @Column({ name: 'status', length: 100 })
    status: string;

    @Column('uuid', { name: 'payment_methods_id', nullable: true })
    @ManyToOne(() => PaymentMethodsEntity)
    @JoinColumn({ name: 'payment_methods_id' })
    paymentMethods: PaymentMethodsEntity;

    @Column('uuid', { name: 'passenger_account_id', nullable: true })
    @ManyToOne(() => PassengerAccountEntity)
    @JoinColumn({ name: 'passenger_account_id' })
    passengerAccount: PassengerAccountEntity;
}