import { TestBed, inject } from '@angular/core/testing';

import { MadeWithLoveService } from './made-with-love.service';

describe('MadeWithLoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadeWithLoveService]
    });
  });

  it('should be created', inject([MadeWithLoveService], (service: MadeWithLoveService) => {
    expect(service).toBeTruthy();
  }));
});
