import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base/base.entity';

@Entity('paymentMethods')
export class PaymentMethodsEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'payment_methods_id' })
    paymentMethodsId: string;

    @Column({ name: 'method_name', length: 100 })
    methodName: string;

    @Column({ name: 'description', length: 100 })
    description: string;
}