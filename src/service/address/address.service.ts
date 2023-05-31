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
import { AddressEntity } from 'src/persistance/address.entity';
import { UpdateAddressDto } from 'src/dto/adress/update-address.dto';
import { AddressDto } from 'src/dto/adress/address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createAddress(addressData: AddressDto) {
    const person = await this.personRepository.findOneBy({
      personId: addressData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const address = this.addressRepository.create(addressData);
    address.Person = person;

    return this.addressRepository.save(address);
  }

  async deleteAddressById(addressId: string) {
    const address = await this.addressRepository.findOne({
      where: { addressId },
    });
    if (!address) {
      return false;
    }
    await this.addressRepository.remove(address);
    return true;
  }

  async findAllAddress() {
    return this.addressRepository.find();
  }

  async findAddressById(addressId: string) {
    const address = await this.addressRepository.findOne({
      where: { addressId },
    });
    if (!address) {
      throw new NotFoundException();
    }
    return address;
  }

  async updateAddress(addressId: string, addressData: UpdateAddressDto) {
    const address = await this.addressRepository.findOne({
      where: { addressId },
    });
    if (!address) {
      throw new NotFoundException();
    }
    this.addressRepository.merge(address, addressData);
    return await this.addressRepository.save(address);
  }
}
