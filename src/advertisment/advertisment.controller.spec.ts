import { Test, TestingModule } from '@nestjs/testing';
import { AdvertismentController } from './advertisment.controller';
import { AdvertismentService } from './advertisment.service';
import { AdvertismentDto } from './dto/ad.dto';

describe('AdvertismentController', () => {
  let controller: AdvertismentController;
  let service: AdvertismentService;

  beforeEach(() => {
    service = new AdvertismentService(null);
    controller = new AdvertismentController(service);
  });

  describe('findAll', () => {
    it('should return an array of advertisments', async () => {
      const result = [];
      jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(result as AdvertismentDto[]);
      expect(await controller.findAll()).toEqual(result as AdvertismentDto[]);
    });
  });

  describe('create', () => {
    it('should return an advertisment', async () => {
      const result = {};
      jest
        .spyOn(service, 'create')
        .mockResolvedValue(result as AdvertismentDto);
      expect(await controller.create(result as AdvertismentDto)).toEqual(
        result as AdvertismentDto,
      );
    });
  });

  describe('findOne', () => {
    it('should return an advertisment', async () => {
      const result = {};
      jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(result as AdvertismentDto);
      expect(await controller.findOne(1)).toEqual(result as AdvertismentDto);
    });
  });

  describe('update', () => {
    it('should return an advertisment', async () => {
      const result = {};
      jest
        .spyOn(service, 'update')
        .mockResolvedValue(result as AdvertismentDto);
      expect(await controller.update(1, result as AdvertismentDto)).toEqual(
        result as AdvertismentDto,
      );
    });
  });

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [AdvertismentController],
  //   }).compile();

  //   controller = module.get<AdvertismentController>(AdvertismentController);
  // });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});
