import { TestBed } from '@angular/core/testing';

import { MregistroService } from './mregistro.service';

describe('MregistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MregistroService = TestBed.get(MregistroService);
    expect(service).toBeTruthy();
  });
});
