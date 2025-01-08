import { Controller, Get, Param, Query } from '@nestjs/common';
// import { CreateStudentService } from './create-student/create-student.service';
import { AllStudentsDto } from './dto/all-students';
import { FindAllStudentService } from './find-all-student/find-all-student.service';
import { FindStudentByIdDto } from './dto/find-student-by-id';
import { FindStudentByIdService } from './find-student-by-id/find-student-by-id.service';

@Controller('student')
export class StudentController {
  constructor(
    // private readonly createStudentService: CreateStudentService,
    private readonly findAllStudents: FindAllStudentService,
    private readonly findStudentByIdService: FindStudentByIdService,
  ) {}

  @Get('all-students')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query('student') student: string): Promise<AllStudentsDto[]> {
    return await this.findAllStudents.execute();
  }

  @Get('find-student-by-id:document')
  findStudentById(
    @Param('student') student: string,
  ): Promise<FindStudentByIdDto> {
    return this.findStudentByIdService.execute(student);
  }

  // @Post('cadastrar')
  // createStudent(@Body() createStudentDto: CreateStudentDto) {
  //   this.createStudentService.(createStudentDto);
  // }
}
