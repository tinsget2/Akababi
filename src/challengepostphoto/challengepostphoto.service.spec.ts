import { Test, TestingModule } from '@nestjs/testing';
import { ChallengepostphotoService } from './challengepostphoto.service';

describe('ChallengepostphotoService', () => {
  let service: ChallengepostphotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallengepostphotoService],
    }).compile();

    service = module.get<ChallengepostphotoService>(ChallengepostphotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
