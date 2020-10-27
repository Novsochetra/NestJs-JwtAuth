import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<{ access_token: string } | undefined> {
    return {
      access_token: this.jwtService.sign({ username, password }),
    };
  }
}
