import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/persistance/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
  ) {}

  async findPersonAll(): Promise<PersonEntity[]> {
    return await this.personRepository.find();
  }

  async findPersonById(personId: string) {
    return await this.personRepository.findOneBy({ personId });
  }

  async createPerson(personData: Partial<PersonEntity>) {
    const person = this.personRepository.create(personData);
    return await this.personRepository.save(person);
  }

  async updatePerson(id: string, personData: Partial<PersonEntity>) {
    const person = await this.findPersonById(id);
    if (!person) {
      return null;
    }
    Object.assign(person, personData);
    return await this.personRepository.save(person);
  }

  async deletePerson(id: string) {
    const person = await this.findPersonById(id);
    if (!person) {
      return false;
    }
    await this.personRepository.remove(person);
    return true;
  }
}
