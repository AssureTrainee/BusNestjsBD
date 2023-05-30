import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonDto } from 'src/dto/person.dto';
import { PersonEntity } from 'src/persistance/person.entity';
import { PersonService } from 'src/service/person/person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async findAll() {
    return await this.personService.findPersonAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.personService.findPersonById(id);
  }

  @Post()
  async create(@Body() personData: PersonDto) {
    const createdPerson = await this.personService.createPerson(personData);
    return createdPerson;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() personData: PersonDto) {
    const updatedPerson = await this.personService.updatePerson(id, personData);
    if (!updatedPerson) {
      return null;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.personService.deletePerson(id);
  }
}
