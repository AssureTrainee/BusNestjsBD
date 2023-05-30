import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationDto } from '../../dto/station/create-station.dto';
import { UpdateStationDto } from '../../dto/station/update-station.dto';
import { StationEntity } from '../../persistance/station.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { validate as isUUID } from 'uuid';
@Injectable()
export class StationsService {
  private readonly logger = new Logger('StationsService');

  constructor(
    @InjectRepository(StationEntity)
    private readonly stationRepository: Repository<StationEntity>,
  ) {}

  async create(createStationDto: CreateStationDto) {
    try {
      const station = this.stationRepository.create(createStationDto);
      await this.stationRepository.save(station);
      return station;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.stationRepository.find({});
  }

  async findOne(term: string) {
    let station: StationEntity;

    if (isUUID(term)) {
      station = await this.stationRepository.findOneBy({ stationId : term });
    } else {
      station = await this.stationRepository.findOneBy({ name: term });
    }
    if (!station) {
      throw new NotFoundException(`Station with id ${term} not found`);
    }
    return station;
  }

  async update(id: string, updateStationDto: UpdateStationDto) {
    const station : StationEntity = await this.findOne(id);
    await this.stationRepository.merge(station, updateStationDto);
    return await this.stationRepository.save(station);
    
  }

  async remove(id: string) {
    const station = await this.findOne(id);
    await this.stationRepository.remove(station);
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
