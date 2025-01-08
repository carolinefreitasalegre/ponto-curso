import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ClassroomDto } from './classroom';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  birthday_date: string;

  @IsDateString()
  @IsNotEmpty()
  registration_date: string;

  @IsNumber()
  @IsNotEmpty()
  phone_number: number;

  @IsNumber()
  @IsNotEmpty()
  classroom_id: number;

  @IsDateString()
  @IsNotEmpty()
  classroom: ClassroomDto;

  @IsEmail()
  @IsNotEmpty()
  email_address: string;
}
