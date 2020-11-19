import { TestBed } from '@angular/core/testing';

import { EnviService } from './envi.service';

describe('EnviService', () => {
  let service: EnviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
