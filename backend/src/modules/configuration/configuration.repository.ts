import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { ConfigurationQueryDto } from './dto/configuration-query.dto';

@Injectable()
export class ConfigurationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createConfiguration(
    dto: CreateConfigurationDto,
  ) {
    return this.prisma.configuration.create({
      data: dto,
    });
  }

  async getConfiguration(
    configurationId: string,
  ) {
    return this.prisma.configuration.findUnique({
      where: {
        id: configurationId,
      },
      include: {
        business: true,
      },
    });
  }

  async updateConfiguration(
    configurationId: string,
    dto: UpdateConfigurationDto,
  ) {
    return this.prisma.configuration.update({
      where: {
        id: configurationId,
      },
      data: dto,
    });
  }

  async deleteConfiguration(
    configurationId: string,
  ) {
    return this.prisma.configuration.delete({
      where: {
        id: configurationId,
      },
    });
  }

  async searchConfigurations(
    query: ConfigurationQueryDto,
  ) {
    return this.prisma.configuration.findMany({
      skip: query.skip,
      take: query.take,

      include: {
        business: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
