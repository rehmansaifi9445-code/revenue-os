import { Injectable } from '@nestjs/common';

@Injectable()
export class OtpService {
  private otpStore = new Map<
    string,
    {
      otp: string;
      expiresAt: Date;
    }
  >();

  generateOtp() {
    return Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
  }

  saveOtp(
    mobileNumber: string,
    otp: string,
  ) {
    const expiresAt = new Date();
    expiresAt.setMinutes(
      expiresAt.getMinutes() + 5,
    );

    this.otpStore.set(
      mobileNumber,
      {
        otp,
        expiresAt,
      },
    );
  }

  verifyOtp(
    mobileNumber: string,
    otp: string,
  ) {
    const data =
      this.otpStore.get(mobileNumber);

    if (!data) {
      return false;
    }

    if (
      data.expiresAt < new Date()
    ) {
      this.otpStore.delete(
        mobileNumber,
      );
      return false;
    }

    if (data.otp !== otp) {
      return false;
    }

    this.otpStore.delete(
      mobileNumber,
    );

    return true;
  }
}
