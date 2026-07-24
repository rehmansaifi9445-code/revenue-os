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

import { ConfigurationService } from './configuration.service';

import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { ConfigurationQueryDto } from './dto/configuration-query.dto';

@Controller('configurations')
export class ConfigurationController {
  constructor(
    private readonly configurationService: ConfigurationService,
  ) {}

  @Post()
  createConfiguration(
    @Body() dto: CreateConfigurationDto,
  ) {
    return this.configurationService.createConfiguration(dto);
  }

  @Get(':id')
  getConfiguration(
    @Param('id') configurationId: string,
  ) {
    return this.configurationService.getConfiguration(
      configurationId,
    );
  }

  @Patch(':id')
  updateConfiguration(
    @Param('id') configurationId: string,
    @Body() dto: UpdateConfigurationDto,
  ) {
    return this.configurationService.updateConfiguration(
      configurationId,
      dto,
    );
  }

  @Delete(':id')
  deleteConfiguration(
    @Param('id') configurationId: string,
  ) {
    return this.configurationService.deleteConfiguration(
      configurationId,
    );
  }

  @Get()
  searchConfigurations(
    @Query() query: ConfigurationQueryDto,
  ) {
    return this.configurationService.searchConfigurations(
      query,
    );
  }
}
