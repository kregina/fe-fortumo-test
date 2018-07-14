import { TestBed, inject } from '@angular/core/testing';

import { SomethingAwesomeService } from './something-awesome.service';

describe('SomethingAwesomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomethingAwesomeService]
    });
  });

  it('should be created', inject([SomethingAwesomeService], (service: SomethingAwesomeService) => {
    expect(service).toBeTruthy();
  }));
});
