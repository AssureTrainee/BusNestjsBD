import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusDto } from '../../dto/Bus.dto';
import { BusEntity } from '../../persistance/Bus.entity';
import { Repository } from 'typeorm';
import { BusUpdateDto } from 'src/dto/Bus.update.dto';
@Injectable()
export class BusService {
  constructor(
    @InjectRepository(BusEntity)
    private busRepository: Repository<BusEntity>,
  ) {}

  async findAllBuses(): Promise<BusEntity[]> {
    return await this.busRepository.find();
  }

  async createBus(BusDto: BusDto) {
    const bus = this.busRepository.create(BusDto);
    try {
      return await this.busRepository.save(bus);
    } catch (error) {
      throw new ConflictException('There was a conflict when create the bus');
    }
  }

  async findBusById(busId: string) {
    const Bus = await this.busRepository.findOneBy({ busId });
    if (!Bus) {
      throw new NotFoundException(`Bus with this id: ${busId} not found`);
    }
    return Bus;
  }

  async updateBus(id: string, busUpdate: BusUpdateDto) {
    const bus: BusEntity = await this.findBusById(id);
    await this.busRepository.merge(bus, busUpdate);
    return await this.busRepository.save(bus);
  }

  async deleteBus(id: string) {
    const result = await this.busRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Bus with ID "${id}" not found`);
    }
  }
}
