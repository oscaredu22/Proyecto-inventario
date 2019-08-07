import {TestBed} from '@angular/core/testing';

import {AunteticateService} from './aunteticate.service';

describe('AunteticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AunteticateService = TestBed.get(AunteticateService);
    expect(service).toBeTruthy();
  });
});
