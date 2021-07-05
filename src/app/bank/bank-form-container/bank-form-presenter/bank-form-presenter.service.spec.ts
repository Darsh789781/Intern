import { TestBed } from '@angular/core/testing';

import { BankFormPresenterService } from './bank-form-presenter.service';

describe('BankFormPresenterService', () => {
  let service: BankFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
