import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ClassroomDto } from './classroom';

export class FindStudentByIdDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsNumber()
  @IsNotEmpty()
  birthday_date: string;

  @IsString()
  @IsNotEmpty()
  registration_date: string;

  @IsString()
  @IsNotEmpty()
  phone_number: number;

  @IsNumber()
  @IsNotEmpty()
  classroom_id: number;

  @IsNotEmpty()
  classroom?: ClassroomDto;

  @IsEmail()
  @IsNotEmpty()
  email_address: string;
}
