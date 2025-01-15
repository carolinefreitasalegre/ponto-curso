import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentService } from './create-student.service';
import { FindStudentByIdService } from '../find-student-by-id/find-student-by-id.service';
import { PrismaService } from '../../../../prisma/prisma.service';
import { mockCreateStudentDto } from './mocks';

describe('CreateStudentService', () => {
  let createStudentService: CreateStudentService;
  let findStudentByIdService: FindStudentByIdService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateStudentService,
        {
          provide: FindStudentByIdService,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {
            students: {
              create: jest.fn(),
            },
            classrooms: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    createStudentService =
      module.get<CreateStudentService>(CreateStudentService);
    findStudentByIdService = module.get<FindStudentByIdService>(
      FindStudentByIdService,
    );
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should throw ConflictException if student already exists', async () => {
    jest.spyOn(findStudentByIdService, 'execute').mockResolvedValueOnce({
      id: 0,
      name: 'John Doe',
      document: '1234567890',
      birthday_date: '1990-01-01',
      registration_date: '2022-01-01',
      phone_number: 987654321,
      classroom: { id: 1, name: 'teste' },
      email_address: 'johndoe@example.com',
      classroom_id: 0,
    });

    await expect(
      createStudentService.execute(mockCreateStudentDto),
    ).rejects.toThrow(ConflictException);
  });

  it('should create a student successfully if student does not exist', async () => {
    jest.spyOn(findStudentByIdService, 'execute').mockResolvedValueOnce(null);
    jest
      .spyOn(prismaService.classrooms, 'findUnique')
      .mockResolvedValueOnce({ id: 1, name: 'teste' });
    jest.spyOn(prismaService.students, 'create').mockResolvedValueOnce({
      id: 1,
      ...mockCreateStudentDto,
    });

    const result = await createStudentService.execute(mockCreateStudentDto);

    expect(result).toEqual({ id: 1, ...mockCreateStudentDto });
  });

  it('should throw an error if Prisma throws an unexpected error', async () => {
    jest.spyOn(findStudentByIdService, 'execute').mockResolvedValueOnce(null);
    jest
      .spyOn(prismaService.classrooms, 'findUnique')
      .mockResolvedValueOnce({ id: 1, name: 'teste' });
    jest
      .spyOn(prismaService.students, 'create')
      .mockRejectedValueOnce(new Error('Unexpected error'));

    await expect(
      createStudentService.execute(mockCreateStudentDto),
    ).rejects.toThrow('Falha ao cadastrar estudante');
  });
});
