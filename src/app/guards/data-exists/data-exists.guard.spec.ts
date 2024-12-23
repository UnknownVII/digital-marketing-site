import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dataExistsGuard } from './data-exists.guard';

describe('dataExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => dataExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
