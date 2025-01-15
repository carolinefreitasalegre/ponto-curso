import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FindStudentByIdService } from '../find-student-by-id/find-student-by-id.service';
import { EditStudentDto } from '../dto/edit-student';

@Injectable()
export class EditStudentService {
  private readonly logger = new Logger(EditStudentService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly findStudentById: FindStudentByIdService,
  ) {}

  async execute(document: string): Promise<EditStudentDto> {
    console.log('Roda a vinheta!', document);

    const students = await this.findStudentById.execute(document);

    if (!students) {
      this.logger.warn('Aluno não encontrado');
      return;
    }

    try {
      await this.prismaService.students.update({
        where: { id: students.id },
        data: {
          name: students.name,
          document: students.document,
          birthday_date: students.birthday_date,
          registration_date: students.registration_date,
          phone_number: students.phone_number,
          classroom_id: students.classroom_id,
          email_address: students.email_address,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
