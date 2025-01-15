import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { FindStudentByIdService } from '../find-student-by-id/find-student-by-id.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { FindStudentByIdDto } from '../dto/find-student-by-id';

@Injectable()
export class CreateStudentService {
  private readonly logger = new Logger(CreateStudentService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly findStudentById: FindStudentByIdService,
  ) {}

  async execute(student: CreateStudentDto) {
    const studentExiting: FindStudentByIdDto =
      await this.findStudentById.execute(student.document);

    if (!studentExiting) {
      try {
        return await this.prismaService.students.create({
          data: {
            name: student.name,
            document: student.document,
            birthday_date: student.birthday_date,
            registration_date: student.registration_date,
            phone_number: student.phone_number,
            email_address: student.email_address,
            classroom_id: student.classroom_id,
            classroom: {
              connect: {
                id: student.classroom_id,
              },
            },
          },
        });
      } catch (error) {
        this.logger.error(error);
        throw new Error('Falha ao cadastrar estudante');
      }
    } else {
      throw new ConflictException('Estudante já cadastrado');
    }
  }
}
