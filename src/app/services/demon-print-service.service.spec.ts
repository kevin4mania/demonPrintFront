import { TestBed } from '@angular/core/testing';

import { DemonPrintServiceService } from './demon-print-service.service';

describe('DemonPrintServiceService', () => {
  let service: DemonPrintServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemonPrintServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
