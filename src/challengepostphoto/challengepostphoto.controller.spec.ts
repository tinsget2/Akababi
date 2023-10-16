import { Test, TestingModule } from '@nestjs/testing';
import { ChallengepostphotoController } from './challengepostphoto.controller';

describe('ChallengepostphotoController', () => {
  let controller: ChallengepostphotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengepostphotoController],
    }).compile();

    controller = module.get<ChallengepostphotoController>(ChallengepostphotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
