import { TestBed } from '@angular/core/testing';

import { GetuserinfoService } from './getuserinfo.service';

describe('GetuserinfoService', () => {
  let service: GetuserinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
