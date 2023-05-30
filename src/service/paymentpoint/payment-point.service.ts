import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentPointDto } from '../../dto/paymentpoint/create-payment-point.dto';
import { UpdatePaymentPointDto } from '../../dto/paymentPoint/update-payment-point.dto';
import { PaymentPointEntity } from '../../persistance/payment.point.entity';
import { StationEntity } from '../../persistance/station.entity';

export class PaymentPointService {
  private readonly logger = new Logger('PaymentPointService');

  constructor(
    @InjectRepository(PaymentPointEntity)
    private readonly paymentPointRepository: Repository<PaymentPointEntity>,
    @InjectRepository(StationEntity)
    private readonly stationRepository: Repository<StationEntity>,
  ) {}

  async create(paymentPointDto: CreatePaymentPointDto) {
    try {
      const station = await this.stationRepository.findOneBy({
        stationId: paymentPointDto.stationId
      })

      if(!station){
        throw new NotFoundException();
      }

      const paymentPoint = this.paymentPointRepository.create();
      paymentPoint.Station = station;

      await this.paymentPointRepository.save(paymentPoint);
      
      return paymentPoint;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.paymentPointRepository.find({});
  }

  async findOne(term: string) {
      const paymentPoint :PaymentPointEntity = await this.paymentPointRepository.findOneBy({
        paymentpointId: term,
      });
    if (!paymentPoint) {
      throw new NotFoundException(`Payment point with id ${term} not found`);
    }

    return paymentPoint;
  }

  async update(id: string, updatePaymentPointDto: UpdatePaymentPointDto) {
    const paymentPoint: PaymentPointEntity = await this.findOne(id);
    await this.paymentPointRepository.merge(paymentPoint, updatePaymentPointDto);
    return await this.paymentPointRepository.save(paymentPoint);
  }

  async remove(id: string) {
    const paymentPoint = await this.findOne(id);
    await this.paymentPointRepository.remove(paymentPoint);
    return true;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
