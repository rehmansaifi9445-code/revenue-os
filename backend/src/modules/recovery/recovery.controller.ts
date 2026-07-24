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

import { RecoveryService } from './recovery.service';

import { CreateRecoveryDto } from './dto/create-recovery.dto';
import { UpdateRecoveryDto } from './dto/update-recovery.dto';
import { RecoveryQueryDto } from './dto/recovery-query.dto';

@Controller('recoveries')
export class RecoveryController {
  constructor(
    private readonly recoveryService: RecoveryService,
  ) {}

  @Post()
  createRecovery(
    @Body() dto: CreateRecoveryDto,
  ) {
    return this.recoveryService.createRecovery(dto);
  }

  @Get(':id')
  getRecovery(
    @Param('id') recoveryId: string,
  ) {
    return this.recoveryService.getRecovery(recoveryId);
  }

  @Patch(':id')
  updateRecovery(
    @Param('id') recoveryId: string,
    @Body() dto: UpdateRecoveryDto,
  ) {
    return this.recoveryService.updateRecovery(
      recoveryId,
      dto,
    );
  }

  @Delete(':id')
  deleteRecovery(
    @Param('id') recoveryId: string,
  ) {
    return this.recoveryService.deleteRecovery(
      recoveryId,
    );
  }

  @Get()
  searchRecoveries(
    @Query() query: RecoveryQueryDto,
  ) {
    return this.recoveryService.searchRecoveries(
      query,
    );
  }
}
