import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { MyPipe } from './my.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthGuard, MyPipe],
})
export class AppModule {}
