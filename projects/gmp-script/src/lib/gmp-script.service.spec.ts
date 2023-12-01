import { TestBed } from '@angular/core/testing';

import { GmpScriptService } from './gmp-script.service';

describe('GmpScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpScriptService = TestBed.get(GmpScriptService);
    expect(service).toBeTruthy();
  });
});
