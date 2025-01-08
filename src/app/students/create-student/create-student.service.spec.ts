// import { ConflictException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateStudentService } from './create-student.service';
// import { FindStudentByIdService } from '../find-student-by-id/find-student-by-id.service';
// import { PrismaService } from 'prisma/prisma.service';
// import { CreateStudentDto } from '../dto/create-student.dto';

// describe('CreateStudentService', () => {
//   let createStudentService: CreateStudentService;
//   let findStudentByIdService: FindStudentByIdService;
//   let prismaService: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         CreateStudentService,
//         {
//           provide: FindStudentByIdService,
//           useValue: {
//             findById: jest.fn(),
//           },
//         },
//         {
//           provide: PrismaService,
//           useValue: {
//             students: {
//               create: jest.fn(),
//             },
//           },
//         },
//       ],
//     }).compile();

//     createStudentService =
//       module.get<CreateStudentService>(CreateStudentService);
//     findStudentByIdService = module.get<FindStudentByIdService>(
//       FindStudentByIdService,
//     );
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   it('should throw ConflictException if student already exists', async () => {
//     // Mock: estudante já existe
//     jest.spyOn(findStudentByIdService, 'findById').mockResolvedValueOnce({
//       id: 1,
//       name: 'John Doe',
//       document: '1234567890',
//       birthday_date: '1990-01-01',
//       registration_date: '2022-01-01',
//       phone_number: 987654321,
//       classroom: 1,
//       email_address: 'johndoe@example.com',
//     });

//     const studentDto: CreateStudentDto = {
//       name: 'John Doe',
//       document: '1234567890',
//       birthday_date: '1990-01-01',
//       registration_date: '2022-01-01',
//       phone_number: 987654321,
//       classroom: 1,
//       email_address: 'johndoe@example.com',
//     };

//     await expect(createStudentService.execute(studentDto)).rejects.toThrow(
//       ConflictException,
//     );
//     expect(findStudentByIdService.findById).toHaveBeenCalledWith(123456789);
//   });

//   it('should create a student successfully if student does not exist', async () => {
//     // Mock: estudante não existe
//     jest.spyOn(findStudentByIdService, 'findById').mockResolvedValueOnce(null);

//     // Mock: criação bem-sucedida
//     jest.spyOn(prismaService.students, 'create').mockResolvedValueOnce({
//       id: 1,
//       name: 'John Doe',
//       document: '1234567890',
//       birthday_date: '1990-01-01',
//       registration_date: '2022-01-01',
//       phone_number: 987654321,
//       classroom: 1,
//       email_address: 'johndoe@example.com',
//     });

//     const studentDto: CreateStudentDto = {
//       name: 'John Doe',
//       document: '1234567890',
//       birthday_date: '1990-01-01',
//       registration_date: '2022-01-01',
//       phone_number: 987654321,
//       classroom: 1,
//       email_address: 'johndoe@example.com',
//     };

//     const result = await createStudentService.execute(studentDto);

//     expect(result).toEqual({
//       id: 2,
//       name: 'New Student',
//       document: '123456789',
//     });
//     expect(findStudentByIdService.findById).toHaveBeenCalledWith(123456789);
//     expect(prismaService.students.create).toHaveBeenCalledWith({
//       data: studentDto,
//     });
//   });

//   it('should throw an error if Prisma throws an unexpected error', async () => {
//     // Mock: estudante não existe
//     jest.spyOn(findStudentByIdService, 'findById').mockResolvedValueOnce(null);

//     // Mock: erro do Prisma
//     jest
//       .spyOn(prismaService.students, 'create')
//       .mockRejectedValueOnce(new Error('Prisma error'));

//     const studentDto: CreateStudentDto = {
//       name: 'John Doe',
//       document: '1234567890',
//       birthday_date: '1990-01-01',
//       registration_date: '2022-01-01',
//       phone_number: 987654321,
//       classroom: 1,
//       email_address: 'johndoe@example.com',
//     };

//     await expect(createStudentService.execute(studentDto)).rejects.toThrow(
//       'Falha ao cadastrar estudante',
//     );
//     expect(findStudentByIdService.findById).toHaveBeenCalledWith(123456789);
//     expect(prismaService.students.create).toHaveBeenCalledWith({
//       data: studentDto,
//     });
//   });
// });
