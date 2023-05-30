import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePassengeraccountDto } from '../../dto/passengeraccount/create-passenger-account.dto';
import { UpdatePassengeraccountDto } from '../../dto/passengeraccount/update-passenger-account.dto';
import { PassengerAccountEntity } from 'src/persistance/passenger.account.entity';
import { PassengerEntity } from 'src/persistance/passenger.entity';
import { AccountTypeEntity } from 'src/persistance/account.type.entity';
import { PassengerService } from '../passenger/passenger.service';
import { AccountTypeService } from '../accounttype/account-type.service';

@Injectable()
export class PassengeraccountService {
  constructor(
    @InjectRepository(PassengerAccountEntity)
    private readonly passengerAccountRepository: Repository<PassengerAccountEntity>,
    @Inject(forwardRef(() => PassengerService))
    private passengerService: PassengerService,
    @Inject(forwardRef(() => AccountTypeService))
    private accountTypeService: AccountTypeService,
  ) {}

  async create(createdPassegenerAccount: CreatePassengeraccountDto) {
    try {
      const passenger = await this.passengerService.findPassengerById(
        createdPassegenerAccount.passengerId,
      );

      if (!passenger) {
        throw new NotFoundException();
      }

      const accountType = await this.accountTypeService.findOne(
        createdPassegenerAccount.accountTypeId,
      );

      if (!accountType) {
        throw new NotFoundException();
      }

      const passengerAccount = this.passengerAccountRepository.create({
        ...createdPassegenerAccount,
      });
      passengerAccount.Passenger = passenger;
      passengerAccount.AccountType = accountType;

      await this.passengerAccountRepository.save(passengerAccount);

      return passengerAccount;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.passengerAccountRepository.find({});
  }

  async findOne(id: string) {
    const passengeraccount: PassengerAccountEntity =
      await this.passengerAccountRepository.findOneBy({
        passengerAccountId: id,
      });

    if (!passengeraccount) {
      throw new NotFoundException(`Passenger account with id ${id} not found`);
    }

    return passengeraccount;
  }

  async update(
    id: string,
    updatePassengeraccountDto: UpdatePassengeraccountDto,
  ) {
    const passengerAccount: PassengerAccountEntity = await this.findOne(id);
    if(!passengerAccount){
      throw new NotFoundException();
    }
    await this.passengerAccountRepository.merge(
      passengerAccount,
      updatePassengeraccountDto,
    );
    return await this.passengerAccountRepository.save(passengerAccount);
  }

  async remove(id: string) {
    const passengerAccount: PassengerAccountEntity = await this.findOne(id);
    if(!passengerAccount){
      throw new NotFoundException();
    }
    await this.passengerAccountRepository.remove(passengerAccount);
    return true;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
