import { TestBed } from '@angular/core/testing';

import { MenusemaineService } from './menusemaine.service';

describe('MenusemaineService', () => {
  let service: MenusemaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusemaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
