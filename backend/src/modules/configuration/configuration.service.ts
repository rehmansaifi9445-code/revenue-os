import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ConfigurationRepository } from './configuration.repository';

import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { ConfigurationQueryDto } from './dto/configuration-query.dto';

@Injectable()
export class ConfigurationService {
  constructor(
    private readonly configurationRepository: ConfigurationRepository,
  ) {}

  async createConfiguration(
    dto: CreateConfigurationDto,
  ) {
    const configuration =
      await this.configurationRepository.createConfiguration(dto);

    return {
      success: true,
      message: 'Configuration created successfully.',
      data: configuration,
    };
  }

  async getConfiguration(
    configurationId: string,
  ) {
    const configuration =
      await this.configurationRepository.getConfiguration(
        configurationId,
      );

    if (!configuration) {
      throw new NotFoundException(
        'Configuration not found.',
      );
    }

    return {
      success: true,
      data: configuration,
    };
  }

  async updateConfiguration(
    configurationId: string,
    dto: UpdateConfigurationDto,
  ) {
    await this.getConfiguration(configurationId);

    const configuration =
      await this.configurationRepository.updateConfiguration(
        configurationId,
        dto,
      );

    return {
      success: true,
      message: 'Configuration updated successfully.',
      data: configuration,
    };
  }

  async deleteConfiguration(
    configurationId: string,
  ) {
    await this.getConfiguration(configurationId);

    await this.configurationRepository.deleteConfiguration(
      configurationId,
    );

    return {
      success: true,
      message: 'Configuration deleted successfully.',
    };
  }

  async searchConfigurations(
    query: ConfigurationQueryDto,
  ) {
    const configurations =
      await this.configurationRepository.searchConfigurations(
        query,
      );

    return {
      success: true,
      count: configurations.length,
      data: configurations,
    };
  }
}
