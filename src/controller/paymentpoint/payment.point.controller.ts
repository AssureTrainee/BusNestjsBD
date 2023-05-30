import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { PaymentPointService } from '../../service/paymentpoint/payment-point.service';
import { CreatePaymentPointDto } from '../../dto/paymentpoint/create-payment-point.dto';
import { UpdatePaymentPointDto } from '../../dto/paymentpoint/update-payment-point.dto';

@Controller('paymentpoint')
export class PaymentPointController {
  constructor(private readonly paymentPointService: PaymentPointService) {}

  @Post()
  create(@Body() createPaymentPointDto: CreatePaymentPointDto) {
    return this.paymentPointService.create(createPaymentPointDto);
  }

  @Get()
  findAll() {
    return this.paymentPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentPointService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentPointDto: UpdatePaymentPointDto) {
    return this.paymentPointService.update(id, updatePaymentPointDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentPointService.remove(id);
  }
}
