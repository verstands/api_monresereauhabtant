import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AgentModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
