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
import { PassengerDto } from 'src/dto/passenger.dto';
import { UpdatePassengerDto } from 'src/dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(PassengerEntity)
    private passengerRepository: Repository<PassengerEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createPassenger(passengerData: PassengerDto) {
    const person = await this.personRepository.findOneBy({
      personId: passengerData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const passenger = this.passengerRepository.create();
    passenger.Person = person;

    return this.passengerRepository.save(passenger);
  }

  async deletePassengerById(passengerId: string) {
    const passenger = await this.passengerRepository.findOne({
      where: { passengerId },
    });
    if (!passenger) {
      return false;
    }
    await this.passengerRepository.remove(passenger);
    return true;
  }

  async findAllPassengers() {
    return this.passengerRepository.find();
  }

  async findPassengerById(passengerId: string) {
    const passenger = await this.passengerRepository.findOne({
      where: { passengerId },
    });
    if (!passenger) {
      throw new NotFoundException();
    }
    return passenger;
  }

  async updatePassenger(
    passengerId: string,
    passengerData: UpdatePassengerDto,
  ) {
    const passenger = await this.passengerRepository.findOne({
      where: { passengerId },
    });
    if (!passenger) {
      throw new NotFoundException();
    }
    return this.passengerRepository.update({ passengerId }, passengerData);
  }
}
