import { Module } from '@nestjs/common';
// import { CreateStudentService } from './create-student/create-student.service';
import { StudentController } from './student.controller';
// import { PrismaService } from 'prisma/prisma.service';
import { FindStudentByIdService } from './find-student-by-id/find-student-by-id.service';
import { PrismaModule } from 'prisma/prisma.module';
import { FindAllStudentService } from './find-all-student/find-all-student.service';
// import { CreateStudentService } from './create-student/create-student.service';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [FindStudentByIdService, FindAllStudentService],
})
export class StudentModule {}
