import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListPresentationComponent } from './bank-list-presentation.component';

describe('BankListPresentationComponent', () => {
  let component: BankListPresentationComponent;
  let fixture: ComponentFixture<BankListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
