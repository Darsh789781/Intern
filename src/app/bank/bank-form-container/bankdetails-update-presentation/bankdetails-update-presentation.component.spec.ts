import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsUpdatePresentationComponent } from './bankdetails-update-presentation.component';

describe('BankdetailsUpdatePresentationComponent', () => {
  let component: BankdetailsUpdatePresentationComponent;
  let fixture: ComponentFixture<BankdetailsUpdatePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailsUpdatePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailsUpdatePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
