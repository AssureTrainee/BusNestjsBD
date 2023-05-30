import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AccountTypeService } from '../../service/accounttype/account-type.service';
import { CreateAccountTypeDto } from '../../dto/accounttype/create-account-type.dto';
import { UpdateAccountTypeDto } from '../../dto/accounttype/update-account-type.dto';

@Controller('accounttype')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Post()
  create(@Body() createAccountTypeDto: CreateAccountTypeDto) {
    return this.accountTypeService.create(createAccountTypeDto);
  }

  @Get()
  findAll() {
    return this.accountTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountTypeDto: UpdateAccountTypeDto) {
    return this.accountTypeService.update(id, updateAccountTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.accountTypeService.remove(id);
  }
}
