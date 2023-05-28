import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('payment_method')
export class PaymentMethodEntity extends BaseEntity {
    @Column({ name: 'method_name', length: 100 })
    methodName: string;

    @Column({ name: 'description', length: 100 })
    description: string;
}