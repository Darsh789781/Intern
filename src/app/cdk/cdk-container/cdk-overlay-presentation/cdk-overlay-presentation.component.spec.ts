import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkOverlayPresentationComponent } from './cdk-overlay-presentation.component';

describe('CdkOverlayPresentationComponent', () => {
  let component: CdkOverlayPresentationComponent;
  let fixture: ComponentFixture<CdkOverlayPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkOverlayPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkOverlayPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
