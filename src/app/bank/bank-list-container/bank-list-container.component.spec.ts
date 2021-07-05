import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListContainerComponent } from './bank-list-container.component';

describe('BankListContainerComponent', () => {
  let component: BankListContainerComponent;
  let fixture: ComponentFixture<BankListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
