import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
} from 'class-validator';
import { ClassroomDto } from './classroom';

export class AllStudentsDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  registration_date: string;

  @IsString()
  @IsNotEmpty()
  birthday_date: string;

  @IsNumber()
  @IsNotEmpty()
  phone_number: number;

  @IsEmail()
  @IsOptional()
  email_address?: string;

  @IsNumber()
  @IsNotEmpty()
  classroom_id: number;

  classroom?: ClassroomDto;
}
