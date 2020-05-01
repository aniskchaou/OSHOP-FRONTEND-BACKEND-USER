import { TestBed } from '@angular/core/testing';

import { AuthAdminService } from './authadmin.service';

describe('AuthadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAdminService = TestBed.get(AuthAdminService);
    expect(service).toBeTruthy();
  });
});
