import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountTypeDto } from '../../dto/accounttype/create-account-type.dto';
import { UpdateAccountTypeDto } from '../../dto/accounttype/update-account-type.dto';
import { AccountTypeEntity } from '../../persistance/account.type.entity';
import { validate as isUUID } from 'uuid';
@Injectable()
export class AccountTypeService {
  private readonly logger = new Logger('AccountTypeService');

  constructor(
    @InjectRepository(AccountTypeEntity)
    private readonly accountTypeRepository: Repository<AccountTypeEntity>,
  ) {}

  async create(createAccountTypeDto: CreateAccountTypeDto) {
    try {
      const accountType =
        this.accountTypeRepository.create(createAccountTypeDto);
      await this.accountTypeRepository.save(accountType);
      return accountType;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.accountTypeRepository.find({});
  }

  async findOne(term: string) {
    let accountType: AccountTypeEntity;
    if (isUUID(term)) {
      accountType = await this.accountTypeRepository.findOneBy({
        accounttypeId: term,
      });
    } else {
      accountType = await this.accountTypeRepository.findOneBy({ type: term });
    }
    if (!accountType) {
      throw new NotFoundException(`Account type with id ${term} not found`);
    }

    return accountType;
  }

  async update(id: string, updateAccountTypeDto: UpdateAccountTypeDto) {
    const accountType: AccountTypeEntity = await this.findOne(id);
    await this.accountTypeRepository.merge(accountType, updateAccountTypeDto);
    return await this.accountTypeRepository.save(accountType);
  }

  async remove(id: string) {
    const accountType = await this.findOne(id);
    await this.accountTypeRepository.remove(accountType);
    return true;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
