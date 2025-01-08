import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AllStudentsDto } from '../dto/all-students';

@Injectable()
export class FindAllStudentService {
  private readonly logger = new Logger(FindAllStudentService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<AllStudentsDto[]> {
    try {
      const students = await this.prismaService.students.findMany({
        include: {
          classroom: true,
        },
      });
      return students;
    } catch (err) {
      this.logger.error(`Erro ao buscar estudantes: ${err.message}`);
      throw new Error('Falha ao buscar estudantes');
    }
  }
}
