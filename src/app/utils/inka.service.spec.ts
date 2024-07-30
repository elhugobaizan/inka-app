import { TestBed } from '@angular/core/testing';

import { InkaService } from './inka.service';

describe('InkaService', () => {
  let service: InkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
