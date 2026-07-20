import { Injectable } from '@nestjs/common';
import { HashProvider } from './hash.provider';

@Injectable()
export class PasswordService {
  async hash(password: string): Promise<string> {
    return HashProvider.hash(password);
  }

  async verify(
    hash: string,
    password: string,
  ): Promise<boolean> {
    return HashProvider.verify(hash, password);
  }
}
