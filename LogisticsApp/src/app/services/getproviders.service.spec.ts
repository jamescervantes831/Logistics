import { TestBed } from '@angular/core/testing';

import { GetprovidersService } from './getproviders.service';

describe('GetprovidersService', () => {
  let service: GetprovidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetprovidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
