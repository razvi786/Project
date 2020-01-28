import { TestBed } from '@angular/core/testing';

import { IPOService } from './ipo.service';

describe('IPOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IPOService = TestBed.get(IPOService);
    expect(service).toBeTruthy();
  });
});
