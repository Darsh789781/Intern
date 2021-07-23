import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPortalPresentationComponent } from './cdk-portal-presentation.component';

describe('CdkPortalPresentationComponent', () => {
  let component: CdkPortalPresentationComponent;
  let fixture: ComponentFixture<CdkPortalPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPortalPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPortalPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
