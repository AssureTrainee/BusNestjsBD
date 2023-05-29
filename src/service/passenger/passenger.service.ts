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

  async findAllPassengers() {
    return this.passengerRepository.find({ relations: ['person'] });
  }

  async findPassengerById(passengerId: string) {
    return this.passengerRepository.findOne({
      where: { passengerId },
      relations: ['person'],
    });
  }

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

  // async updatePassenger(id: string, passengerData: Partial<PassengerEntity>) {
  //   const passenger = await this.passengerRepository.findOne({
  //     where: { id },
  //     relations: ['person'],
  //   });
  //   if (!passenger) {
  //     throw new HttpException(
  //       'No existe un passenger con este ID.',
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }

  //   passenger.status = passengerData.status;

  //   if (passengerData.personId) {
  //     Object.assign(passenger.personId, passengerData.personId);
  //     await this.personRepository.save(passenger.personId);
  //   }

  //   return this.passengerRepository.save(passenger);
  // }

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
}
