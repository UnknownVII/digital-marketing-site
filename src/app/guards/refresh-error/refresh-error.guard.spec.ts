import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { RefreshGuard } from './refresh-error.guard';

describe('refreshErrorGuard', () => {
  let guard: RefreshGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RefreshGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
