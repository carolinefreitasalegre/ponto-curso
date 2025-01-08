import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StudentModule } from './app/students/student.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AppService } from './app.service';

@Module({
  imports: [StudentModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
