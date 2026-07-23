import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { BusinessRepository } from './business.repository';

import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { BusinessQueryDto } from './dto/business-query.dto';

@Injectable()
export class BusinessService {
  constructor(
    private readonly businessRepository: BusinessRepository,
  ) {}

  async createBusiness(
    ownerId: string,
    dto: CreateBusinessDto,
  ) {
    const existingBusiness =
      await this.businessRepository.getBusiness(
        ownerId,
      );

    if (existingBusiness) {
      throw new ConflictException(
        'Business already exists.',
      );
    }

    const business =
      await this.businessRepository.createBusiness(
        ownerId,
        dto,
      );

    return {
      success: true,
      message: 'Business created successfully.',
      data: business,
    };
  }

  async getBusiness(ownerId: string) {
    const business =
      await this.businessRepository.getBusiness(
        ownerId,
      );

    if (!business) {
      throw new NotFoundException(
        'Business not found.',
      );
    }

    return {
      success: true,
      data: business,
    };
  }

  async updateBusiness(
    ownerId: string,
    dto: UpdateBusinessDto,
  ) {
    await this.getBusiness(ownerId);

    const business =
      await this.businessRepository.updateBusiness(
        ownerId,
        dto,
      );

    return {
      success: true,
      message: 'Business updated successfully.',
      data: business,
    };
  }

  async deleteBusiness(ownerId: string) {
    await this.getBusiness(ownerId);

    await this.businessRepository.deleteBusiness(
      ownerId,
    );

    return {
      success: true,
      message: 'Business deleted successfully.',
    };
  }

  async searchBusinesses(
    ownerId: string,
    query: BusinessQueryDto,
  ) {
    const businesses =
      await this.businessRepository.searchBusinesses(
        ownerId,
        query,
      );

    return {
      success: true,
      count: businesses.length,
      data: businesses,
    };
  }
}
