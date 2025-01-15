import { ClassroomDto } from '../dto/classroom.dto';
import { CreateStudentDto } from '../dto/create-student.dto';

export const mockClassroomDto: ClassroomDto = {
  id: 1,
  name: 'Turma A',
};

export const mockCreateStudentDto: CreateStudentDto = {
  name: 'John Doe',
  document: '123456789',
  birthday_date: '2005-05-20',
  registration_date: '2025-01-01',
  phone_number: 1234567890,
  classroom_id: 1,
  classroom: mockClassroomDto,
  email_address: 'john.doe@example.com',
};
