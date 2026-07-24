import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { RecoveryRepository } from './recovery.repository';

import { CreateRecoveryDto } from './dto/create-recovery.dto';
import { UpdateRecoveryDto } from './dto/update-recovery.dto';
import { RecoveryQueryDto } from './dto/recovery-query.dto';

@Injectable()
export class RecoveryService {
  constructor(
    private readonly recoveryRepository: RecoveryRepository,
  ) {}

  async createRecovery(
    dto: CreateRecoveryDto,
  ) {
    const recovery =
      await this.recoveryRepository.createRecovery(dto);

    return {
      success: true,
      message: 'Recovery created successfully.',
      data: recovery,
    };
  }

  async getRecovery(
    recoveryId: string,
  ) {
    const recovery =
      await this.recoveryRepository.getRecovery(recoveryId);

    if (!recovery) {
      throw new NotFoundException(
        'Recovery not found.',
      );
    }

    return {
      success: true,
      data: recovery,
    };
  }

  async updateRecovery(
    recoveryId: string,
    dto: UpdateRecoveryDto,
  ) {
    await this.getRecovery(recoveryId);

    const recovery =
      await this.recoveryRepository.updateRecovery(
        recoveryId,
        dto,
      );

    return {
      success: true,
      message: 'Recovery updated successfully.',
      data: recovery,
    };
  }

  async deleteRecovery(
    recoveryId: string,
  ) {
    await this.getRecovery(recoveryId);

    await this.recoveryRepository.deleteRecovery(
      recoveryId,
    );

    return {
      success: true,
      message: 'Recovery deleted successfully.',
    };
  }

  async searchRecoveries(
    query: RecoveryQueryDto,
  ) {
    const recoveries =
      await this.recoveryRepository.searchRecoveries(
        query,
      );

    return {
      success: true,
      count: recoveries.length,
      data: recoveries,
    };
  }
}
