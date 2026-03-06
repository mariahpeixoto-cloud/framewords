import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodModule } from './tod/tod.module';

@Module({
  imports: [TodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
