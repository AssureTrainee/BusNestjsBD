import {
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
import { PhoneNumberDto } from 'src/dto/phone-number/phonenumber.dto';
import { PhoneNumberEntity } from 'src/persistance/phone-number.entity';
import { UpdatePhoneNumberDto } from 'src/dto/phone-number/update-phonenumber.dto';

@Injectable()
export class PhonenumberService {
  constructor(
    @InjectRepository(PhoneNumberEntity)
    private phoneNumberRepository: Repository<PhoneNumberEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createPhoneNumber(phoneData: PhoneNumberDto) {
    const person = await this.personRepository.findOneBy({
      personId: phoneData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const phone = this.phoneNumberRepository.create(phoneData);
    phone.Person = person;

    return this.phoneNumberRepository.save(phone);
  }

  async deletePhoneNumberById(phoneNumberId: string) {
    const phone = await this.phoneNumberRepository.findOne({
      where: { phoneNumberId },
    });
    if (!phone) {
      return false;
    }
    await this.phoneNumberRepository.remove(phone);
    return true;
  }

  async findAllPhoneNumber() {
    return this.phoneNumberRepository.find();
  }

  async findPhoneNumberById(phoneNumberId: string) {
    const phone = await this.phoneNumberRepository.findOne({
      where: { phoneNumberId },
    });
    if (!phone) {
      throw new NotFoundException();
    }
    return phone;
  }

  async updatePhoneNumber(
    phoneNumberId: string,
    phoneData: UpdatePhoneNumberDto,
  ) {
    const phone = await this.phoneNumberRepository.findOne({
      where: { phoneNumberId },
    });
    if (!phone) {
      throw new NotFoundException();
    }
    this.phoneNumberRepository.merge(phone, phoneData);
    return await this.phoneNumberRepository.save(phone);
  }
}
