import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PassengerEntity } from 'src/persistance/passenger.entity';
import { PersonEntity } from 'src/persistance/person.entity';
import { PersonService } from '../person/person.service';
import { DriverEntity } from 'src/persistance/driver.entity';
import { DriverDro } from 'src/dto/driver/driver.dto';
import { UpdateDriverDto } from 'src/dto/driver/update-driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverEntity)
    private driverRepository: Repository<DriverEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createDriver(driverData: DriverDro) {
    const person = await this.personRepository.findOneBy({
      personId: driverData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const driver = this.driverRepository.create();
    driver.Person = person;

    return this.driverRepository.save(driver);
  }

  async deleteDriverById(driverId: string) {
    const driver = await this.driverRepository.findOne({
      where: { driverId },
    });
    if (!driver) {
      return false;
    }
    await this.driverRepository.remove(driver);
    return true;
  }

  async findAllDriver() {
    return this.driverRepository.find();
  }

  async findDriverById(driverId: string) {
    const driver = await this.driverRepository.findOne({
      where: { driverId },
    });
    if (!driver) {
      throw new NotFoundException();
    }
    return driver;
  }

  async updateDriver(driverId: string, driverData: UpdateDriverDto) {
    const driver = await this.driverRepository.findOne({
      where: { driverId },
    });
    if (!driver) {
      throw new NotFoundException();
    }
    return this.driverRepository.update({ driverId }, driverData);
  }
}
