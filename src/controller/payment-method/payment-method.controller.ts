import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentMethodService } from '../../service/payment-method/payment-method.service';
import { PaymentMethodsEntity } from 'src/persistance/payment.method.entity';
import { PaymentMethodDto } from 'src/dto/payment.method.dto';

@Controller('payment-method')
export class PaymentMethodController {
    constructor(private paymentMethodService: PaymentMethodService) {}

    @Get()
    async findAll() {
        return await this.paymentMethodService.findPaymentMethodsAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const paymentMethod = await this.paymentMethodService.findPaymentMethodById(id);
        if(!paymentMethod)
            return null;
        return this.mapToDto(paymentMethod);
    }

    @Post()
    async create(@Body() paymentMethodData: PaymentMethodDto) {
        const createdPaymentMethod = await this.paymentMethodService.createPaymentMethod(paymentMethodData);
        return createdPaymentMethod;
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() paymentMethodData: PaymentMethodDto,
    ): Promise<PaymentMethodDto | null> {
        const updatedPaymentMethod = await this.paymentMethodService.updatePaymentMethod(id, paymentMethodData);
        if(!updatedPaymentMethod)
            return null;
        return this.mapToDto(updatedPaymentMethod);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.paymentMethodService.deletePaymentMethod(id);
    }

    private mapToDto(paymentMethod: PaymentMethodsEntity): PaymentMethodDto {
        const paymentMethodDto: PaymentMethodDto = {
            methodName: paymentMethod.methodName,
            description: paymentMethod.description
        };
        return paymentMethodDto;
    }
}
