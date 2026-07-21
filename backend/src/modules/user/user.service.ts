import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  // ==========================
  // PROFILE
  // ==========================

  async getProfile(
    userId: string,
  ) {
    const user =
      await this.userRepository.findUserById(
        userId,
      );

    if (!user) {
      throw new NotFoundException(
        'User not found.',
      );
    }

    return {
      success: true,
      data: user,
    };
  }

  async updateProfile(
    userId: string,
    dto: any,
  ) {
    const user =
      await this.userRepository.updateProfile(
        userId,
        dto,
      );

    return {
      success: true,
      message:
        'Profile updated successfully.',
      data: user,
    };
  }

  // ==========================
  // BUSINESS
  // ==========================

  async updateBusiness(
    userId: string,
    dto: any,
  ) {
    const business =
      await this.userRepository.updateBusiness(
        userId,
        dto,
      );

    return {
      success: true,
      message:
        'Business updated successfully.',
      data: business,
    };
  }

  // ==========================
  // SETTINGS
  // ==========================

  async updateSettings(
    userId: string,
    dto: any,
  ) {
    const settings =
      await this.userRepository.updateSettings(
        userId,
        dto,
      );

    return {
      success: true,
      message:
        'Settings updated successfully.',
      data: settings,
    };
  }
}
