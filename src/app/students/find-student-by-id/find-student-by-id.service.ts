import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FindStudentByIdDto } from '../dto/find-student-by-id';

@Injectable()
export class FindStudentByIdService {
  private readonly logger = new Logger(FindStudentByIdService.name);

  constructor(private readonly prismaService: PrismaService) {}

  async execute(document: string): Promise<FindStudentByIdDto> {
    if (!document) {
      this.logger.warn('Id inválido');
    }
    if (!document) {
      throw new Error(
        'Identificação inválida ou aluno não cadastrado. Tente novamente.',
      );
    }
    return await this.prismaService.students.findFirst({ where: { document } });
  }
}
