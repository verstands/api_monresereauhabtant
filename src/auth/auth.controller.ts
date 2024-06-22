import { Body, Controller, Post } from '@nestjs/common';
import { AuthBody } from 'src/interface/auth-body.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return await this.authservice.login(authBody);
  }
}
