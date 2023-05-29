import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base/base.entity';


@Entity('accountType')
export class AccountTypeEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'account_type_id' })
    accountTypeId : string;

    @Column({ name: 'type', length: 100 })
    type : string;

    @Column({ name: 'fee' })
    fee: number;
}