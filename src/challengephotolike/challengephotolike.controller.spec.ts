import { Test, TestingModule } from '@nestjs/testing';
import { ChallengephotolikeController } from './challengephotolike.controller';

describe('ChallengephotolikeController', () => {
  let controller: ChallengephotolikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengephotolikeController],
    }).compile();

    controller = module.get<ChallengephotolikeController>(
      ChallengephotolikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
