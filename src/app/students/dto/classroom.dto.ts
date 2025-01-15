import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { AllStudentsDto } from './all-students';

export class ClassroomDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  students?: AllStudentsDto[];
}
