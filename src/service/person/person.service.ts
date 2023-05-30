import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/persistance/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
  ) {}

  async findPersonAll() {
    return await this.personRepository.find();
  }

  async findPersonById(personId: string) {
    const person = await this.personRepository.findOneBy({ personId });
    if (!person) {
      throw new BadRequestException(
        `Person with this id: ${personId} not found`,
      );
    }
    return person;
  }

  async createPerson(personData: Partial<PersonEntity>) {
    const person = this.personRepository.create(personData);
    return await this.personRepository.save(person);
  }

  async updatePerson(personId: string, personData: Partial<PersonEntity>) {
    const person = await this.findPersonById(personId);
    if (!person) {
      return null;
    }
    Object.assign(person, personData);
    return await this.personRepository.save(person);
  }

  async deletePerson(personId: string) {
    const person = await this.findPersonById(personId);
    if (!person) {
      return false;
    }
    await this.personRepository.remove(person);
    return true;
  }
}
