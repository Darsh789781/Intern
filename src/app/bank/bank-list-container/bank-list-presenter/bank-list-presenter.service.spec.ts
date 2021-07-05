import { TestBed } from '@angular/core/testing';

import { BankListPresenterService } from './bank-list-presenter.service';

describe('BankListPresenterService', () => {
  let service: BankListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
