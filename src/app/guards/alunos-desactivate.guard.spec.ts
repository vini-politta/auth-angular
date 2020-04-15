import { TestBed } from '@angular/core/testing';

import { AlunosDesactivateGuard } from './alunos-desactivate.guard';

describe('AlunosDesactivateGuard', () => {
  let guard: AlunosDesactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunosDesactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
