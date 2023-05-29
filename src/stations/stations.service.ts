import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from './entities/station.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { validate as isUUID } from 'uuid';
@Injectable()
export class StationsService {
  private readonly logger = new Logger('StationsService');

  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
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
    let station: Station;

    if (isUUID(term)) {
      station = await this.stationRepository.findOneBy({ id : term });
    } else {
      station = await this.stationRepository.findOneBy({ name: term });
    }
    if (!station) {
      throw new NotFoundException(`Station with id ${term} not found`);
    }
    return station;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} station`;
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
