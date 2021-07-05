import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFormPresentationComponent } from './bank-form-presentation.component';

describe('BankFormPresentationComponent', () => {
  let component: BankFormPresentationComponent;
  let fixture: ComponentFixture<BankFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
