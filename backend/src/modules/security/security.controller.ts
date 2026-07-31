import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { SecurityService } from './security.service';

import { CreateSecurityDto } from './dto/create-security.dto';
import { UpdateSecurityDto } from './dto/update-security.dto';
import { SecurityQueryDto } from './dto/security-query.dto';

@Controller('security')
export class SecurityController {
  constructor(
    private readonly service: SecurityService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateSecurityDto,
  ) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: SecurityQueryDto,
  ) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateSecurityDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.service.remove(id);
  }
}
