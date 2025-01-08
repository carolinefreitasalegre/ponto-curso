import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStudentService } from './create-student/create-student.service';
import { FindAllStudentService } from './find-all-student/find-all-student.service';
import { FindStudentByIdDto } from './dto/find-student-by-id';
import { FindStudentByIdService } from './find-student-by-id/find-student-by-id.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudentService: CreateStudentService,
    private readonly findAllStudents: FindAllStudentService,
    private readonly findStudentByIdService: FindStudentByIdService,
  ) {}

  @Get('all-students')
  async findAll() {
    return await this.findAllStudents.execute();
  }

  @Get('find-student-by-id:document')
  async findStudentById(
    @Param('student') student: string,
  ): Promise<FindStudentByIdDto> {
    try {
      return await this.findStudentByIdService.execute(student);
    } catch (err) {
      console.error(err);
      throw new Error('Estudante não encontrado');
    }
  }

  @Post('cadastrar')
  async createStudent(@Body() data: CreateStudentDto) {
    return await this.createStudentService.execute(data);
  }
}
