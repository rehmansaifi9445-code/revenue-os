import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { BusinessService } from './business.service';

import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { BusinessQueryDto } from './dto/business-query.dto';

@Controller('business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
  ) {}

  // Temporary
  // JWT ke baad yahan login user ka ownerId aayega
  private readonly ownerId = 'TEMP_OWNER_ID';

  @Post()
  createBusiness(
    @Body() dto: CreateBusinessDto,
  ) {
    return this.businessService.createBusiness(
      this.ownerId,
      dto,
    );
  }

  @Get()
  getBusiness() {
    return this.businessService.getBusiness(
      this.ownerId,
    );
  }

  @Patch()
  updateBusiness(
    @Body() dto: UpdateBusinessDto,
  ) {
    return this.businessService.updateBusiness(
      this.ownerId,
      dto,
    );
  }

  @Delete()
  deleteBusiness() {
    return this.businessService.deleteBusiness(
      this.ownerId,
    );
  }

  @Get('search')
  searchBusinesses(
    @Query() query: BusinessQueryDto,
  ) {
    return this.businessService.searchBusinesses(
      this.ownerId,
      query,
    );
  }
}
