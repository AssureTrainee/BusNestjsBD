import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from './base/base.entity';
import { PaymentMethodEntity } from "./payment-method.entity";
import { passengerAccountEntity } from "./passenger-account";

@Entity('payment_transaction')
export class PaymentTransactionEntity extends BaseEntity {
    @Column({ name: 'amount' })
    amount: number;

    @Column({ 
        type: 'timestamp', 
        name: 'created_at', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column({ name: 'details', length: 100 })
    details: string;

    @Column({ name: 'status', length: 100 })
    status: string;

    @Column({ name: 'verification_code', length: 100 })
    verificationCode: string;

    @Column('uuid', { name: 'payment_methods_id', nullable: true })
    @ManyToOne(() => PaymentMethodEntity)
    @JoinColumn({ name: 'payment_methods_id' })
    paymnetMethod: PaymentMethodEntity;

    @Column('uuid', { name: 'passenger_account_id', nullable: true })
    @ManyToOne(() => passengerAccountEntity)
    @JoinColumn({ name: 'passenger_account_id' })
    passengerAccount: passengerAccountEntity;

}