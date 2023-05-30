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
import { PersonEntity } from 'src/persistance/person.entity';
import { PersonService } from '../person/person.service';
import { PassengerDto } from 'src/dto/passenger.dto';
import { UpdatePassengerDto } from 'src/dto/update-passenger.dto';
import { OwnerEntity } from 'src/persistance/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    private ownerRepository: Repository<OwnerEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createOwner(ownerData: PassengerDto) {
    const person = await this.personRepository.findOneBy({
      personId: ownerData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const owner = this.ownerRepository.create();
    owner.Person = person;

    return this.ownerRepository.save(owner);
  }

  async deleteOwnerById(ownerId: string) {
    const owner = await this.ownerRepository.findOne({
      where: { ownerId },
    });
    if (!owner) {
      return false;
    }
    await this.ownerRepository.remove(owner);
    return true;
  }

  async findAllOwner() {
    return this.ownerRepository.find();
  }

  async findOwnerById(ownerId: string) {
    const owner = await this.ownerRepository.findOne({
      where: { ownerId },
    });
    if (!owner) {
      throw new NotFoundException();
    }
    return owner;
  }

  async updateOwner(ownerId: string, ownerData: UpdatePassengerDto) {
    const owner = await this.ownerRepository.findOne({
      where: { ownerId },
    });
    if (!owner) {
      throw new NotFoundException();
    }
    return this.ownerRepository.update({ ownerId }, ownerData);
  }
}
