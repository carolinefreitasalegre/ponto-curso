import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FindStudentByIdService } from '../find-student-by-id/find-student-by-id.service';
import { FindStudentByIdDto } from '../dto/find-student-by-id';
import { DeleteStudentDto } from '../dto/delete-student';

@Injectable()
export class DeleteStudentService {
  private readonly logger = new Logger(DeleteStudentService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findStudentById: FindStudentByIdService,
  ) {}

  async execute(document: string): Promise<DeleteStudentDto | void> {
    const findStudent: FindStudentByIdDto =
      await this.findStudentById.execute(document);

    if (!findStudent) {
      this.logger.warn('Aluno não encontrado');
      return;
    }

    try {
      await this.prismaService.students.delete({
        where: { id: findStudent.id },
      });
      this.logger.log(`Aluno com ID ${findStudent.id} excluído com sucesso.`);
    } catch (error) {
      this.logger.error(`Erro ao excluir aluno: ${error.message}`);
      throw new Error('Falha ao excluir aluno');
    }
  }
}
