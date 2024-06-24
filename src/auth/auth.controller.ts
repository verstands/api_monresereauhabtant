import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthBody } from 'src/dto/auth-body.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AgentInterface } from 'src/dto/agent.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return await this.authservice.login(authBody);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async authenticate(@Request() request){
    console.log(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createAgent(@Body() agentinfrface: AgentInterface){
    return await this.authservice.create(agentinfrface);
  }
}
