import { TestBed, inject } from '@angular/core/testing';

import { SingleStateService } from './single-state.service';

describe('SingleStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleStateService]
    });
  });

  it('should be created', inject([SingleStateService], (service: SingleStateService) => {
    expect(service).toBeTruthy();
  }));
});
