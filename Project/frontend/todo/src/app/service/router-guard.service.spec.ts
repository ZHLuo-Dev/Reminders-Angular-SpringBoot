import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './router-guard.service';

describe('RouterGuardService', () => {
  let service: RouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
