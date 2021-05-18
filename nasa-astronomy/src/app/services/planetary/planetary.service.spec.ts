import { TestBed } from '@angular/core/testing';

import { PlanetaryService } from './planetary.service';

describe('PlanetaryService', () => {
  let service: PlanetaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
