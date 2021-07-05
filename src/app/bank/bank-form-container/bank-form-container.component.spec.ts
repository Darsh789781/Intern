import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFormContainerComponent } from './bank-form-container.component';

describe('BankFormContainerComponent', () => {
  let component: BankFormContainerComponent;
  let fixture: ComponentFixture<BankFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
