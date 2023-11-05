import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
    describe('findAll', () => {
      it('should return an array of users', async () => {
        const result = [
          {
            id: 1,
            name: 'test',
            email: 'mail.com',
            challenges: [],
            challengePhotoLikes: [],
          },
        ];
        jest.spyOn(service, 'findAll').mockResolvedValue(result as any);
        expect(await controller.findAll()).toBe(result as any);
      });
    });
  });

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [UserController],
  //   }).compile();

  //   controller = module.get<UserController>(UserController);
  // });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});
