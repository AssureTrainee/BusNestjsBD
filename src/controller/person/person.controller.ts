import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { PersonDto } from 'src/dto/person.dto';
import { PersonEntity } from 'src/persistance/person.entity';
import { PersonService } from 'src/service/person/person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async findAll() {
    const persons = await this.personService.findPersonAll();
    return persons.map((person) => this.mapToDto(person));
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const person = await this.personService.findPersonById(id);
    if (!person) {
      return null;
    }
    return this.mapToDto(person);
  }

  @Post()
  async create(@Body() personData: PersonDto) {
    const createdPerson = await this.personService.createPerson(personData);
    return createdPerson;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() personData: PersonDto,
  ): Promise<PersonDto | null> {
    const updatedPerson = await this.personService.updatePerson(id, personData);
    if (!updatedPerson) {
      return null;
    }
    return this.mapToDto(updatedPerson);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.personService.deletePerson(id);
  }

  private mapToDto(person: PersonEntity): PersonDto {
    const personDto: PersonDto = {
      firstName: person.firstName,
      lastName: person.lastName,
      birthDate: person.birthDate,
      dni: person.dni,
      code: person.code,
    };
    return personDto;
  }
}
