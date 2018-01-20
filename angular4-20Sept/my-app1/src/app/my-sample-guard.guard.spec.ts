import { TestBed, async, inject } from '@angular/core/testing';

import { MySampleGuardGuard } from './my-sample-guard.guard';

describe('MySampleGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySampleGuardGuard]
    });
  });

  it('should ...', inject([MySampleGuardGuard], (guard: MySampleGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
