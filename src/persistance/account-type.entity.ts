import { Column, Double, Entity } from "typeorm";
import { BaseEntity } from "./base/base.entity";

@Entity('accountType')
export class AccountTypeEntity extends BaseEntity {
    @Column({ name: 'type', length: 100 })
    type: string;

    @Column({ name: 'fee' })
    fee: number;
}