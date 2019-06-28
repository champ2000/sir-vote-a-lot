import { TestBed } from '@angular/core/testing';

import { VoteDataService } from './vote-data.service';

describe('VoteDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteDataService = TestBed.get(VoteDataService);
    expect(service).toBeTruthy();
  });
});
