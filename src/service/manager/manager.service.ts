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
import { ManagerEntity } from 'src/persistance/manager.entity';
import { ManagerDto } from 'src/dto/mannager/manager.dto';
import { UpdateManagerDto } from 'src/dto/mannager/update-manager.dto';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(ManagerEntity)
    private managerRepository: Repository<ManagerEntity>,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
    @Inject(forwardRef(() => PersonService))
    private personService: PersonService,
  ) {}

  async createManager(managerData: ManagerDto) {
    const person = await this.personRepository.findOneBy({
      personId: managerData.personId,
    });
    if (!person) {
      throw new NotFoundException();
    }

    const manager = this.managerRepository.create();
    manager.Person = person;

    return this.managerRepository.save(manager);
  }

  async deleteManagerById(managerId: string) {
    const manager = await this.managerRepository.findOne({
      where: { managerId },
    });
    if (!manager) {
      return false;
    }
    await this.managerRepository.remove(manager);
    return true;
  }

  async findAllManager() {
    return this.managerRepository.find();
  }

  async findManagerById(managerId: string) {
    const manager = await this.managerRepository.findOne({
      where: { managerId },
    });
    if (!manager) {
      throw new NotFoundException();
    }
    return manager;
  }

  async updateManager(managerId: string, managerData: UpdateManagerDto) {
    const manager = await this.managerRepository.findOne({
      where: { managerId },
    });
    if (!manager) {
      throw new NotFoundException();
    }
    return this.managerRepository.update({ managerId }, managerData);
  }
}
