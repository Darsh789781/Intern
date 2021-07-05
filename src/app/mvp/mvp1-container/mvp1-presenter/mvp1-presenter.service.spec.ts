import { TestBed } from '@angular/core/testing';

import { Mvp1PresenterService } from './mvp1-presenter.service';

describe('Mvp1PresenterService', () => {
  let service: Mvp1PresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mvp1PresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
