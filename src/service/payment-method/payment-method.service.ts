import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodsEntity } from 'src/persistance/payment.method.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectRepository(PaymentMethodsEntity)
        private paymentMethodRepository: Repository<PaymentMethodsEntity>,
    ) {}

    async findPaymentMethodsAll(): Promise<PaymentMethodsEntity[]> {
        return await this.paymentMethodRepository.find();
    }

    async findPaymentMethodById(paymentMethodsId: string) {
        return await this.paymentMethodRepository.findOneBy({ paymentMethodsId });
    }

    async createPaymentMethod(paymentMethodData: Partial<PaymentMethodsEntity>) {
        const paymentMethod = this.paymentMethodRepository.create(paymentMethodData);
        return await this.paymentMethodRepository.save(paymentMethod);
    }

    async updatePaymentMethod(id: string, paymentMethodData: Partial<PaymentMethodsEntity>) {
        const paymentMethod = await this.findPaymentMethodById(id);
        if(!paymentMethod) {
            return null;
        }   
        Object.assign(paymentMethod, paymentMethodData);
        return await this.paymentMethodRepository.save(paymentMethod);
    }

    async deletePaymentMethod(id: string) {
        const paymentMethod = await this.findPaymentMethodById(id);
        if(!paymentMethod) {
            return false;
        }
        await this.paymentMethodRepository.remove(paymentMethod);
        return true;
    }
}
