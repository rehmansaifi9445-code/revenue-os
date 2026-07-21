import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // ==========================
  // PROFILE
  // ==========================

  @Get(':userId/profile')
  getProfile(
    @Param('userId') userId: string,
  ) {
    return this.userService.getProfile(
      userId,
    );
  }

  @Patch(':userId/profile')
  updateProfile(
    @Param('userId') userId: string,
    @Body() dto: UpdateProfileDto, 
  ) {
    return this.userService.updateProfile(
      userId,
      dto,
    );
  }

  // ==========================
  // BUSINESS
  // ==========================

  @Patch(':userId/business')
  updateBusiness(
    @Param('userId') userId: string,
    @Body() dto: UpdateBusinessDto,
  ) {
    return this.userService.updateBusiness(
      userId,
      dto,
    );
  }

  // ==========================
  // SETTINGS
  // ==========================

  @Patch(':userId/settings')
  updateSettings(
    @Param('userId') userId: string,
    @Body() dto: UpdateSettingsDto,
  ) {
    return this.userService.updateSettings(
      userId,
      dto,
    );
  }
}
