import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
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
