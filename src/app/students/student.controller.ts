import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStudentService } from './create-student/create-student.service';
import { FindAllStudentService } from './find-all-student/find-all-student.service';
import { FindStudentByIdService } from './find-student-by-id/find-student-by-id.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { DeleteStudentService } from './delete-student/delete-student.service';
import { DeleteStudentDto } from './dto/delete-student';

@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudentService: CreateStudentService,
    private readonly findAllStudentService: FindAllStudentService,
    private readonly findStudentByIdService: FindStudentByIdService,
    private readonly deleteStudentServide: DeleteStudentService,
  ) {}

  @Get('all-students')
  async findAll() {
    return await this.findAllStudentService.execute();
  }

  @Get('find-student-by-id/:document')
  async findStudentById(@Param('document') document: string) {
    return await this.findStudentByIdService.execute(document);
  }

  @Post('cadastrar')
  async createStudent(@Body() data: CreateStudentDto) {
    return await this.createStudentService.execute(data);
  }

  @Delete('deletar/:document')
  async deleteStudent(@Param('document') document: string) {
    return await this.deleteStudentServide.execute(document);
  }
}
