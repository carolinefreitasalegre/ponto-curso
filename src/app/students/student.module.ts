import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { FindStudentByIdService } from './find-student-by-id/find-student-by-id.service';
import { PrismaModule } from 'prisma/prisma.module';
import { FindAllStudentService } from './find-all-student/find-all-student.service';
import { CreateStudentService } from './create-student/create-student.service';
import { DeleteStudentService } from './delete-student/delete-student.service';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [
    FindStudentByIdService,
    FindAllStudentService,
    CreateStudentService,
    DeleteStudentService,
  ],
})
export class StudentModule {}
