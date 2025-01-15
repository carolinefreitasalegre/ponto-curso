import { ClassroomDto } from '../dto/classroom.dto';
import { FindStudentByIdDto } from '../dto/find-student-by-id';

export const mockClassroomDto: ClassroomDto = {
  id: 1,
  name: 'Turma A',
};

export const mockFindStudentDto: FindStudentByIdDto = {
  id: 0,
  name: 'John Doe',
  document: '1234567890',
  birthday_date: '1990-01-01',
  registration_date: '2022-01-01',
  phone_number: 987654321,
  classroom: mockClassroomDto,
  email_address: 'johndoe@example.com',
  classroom_id: 0,
};
