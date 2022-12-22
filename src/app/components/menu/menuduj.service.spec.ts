import { TestBed } from '@angular/core/testing';

import { MenudujService } from './menuduj.service';

describe('MenudujService', () => {
  let service: MenudujService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudujService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
