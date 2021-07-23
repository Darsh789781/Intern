import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkVirtualScrollPresentationComponent } from './cdk-virtual-scroll-presentation.component';

describe('CdkVirtualScrollPresentationComponent', () => {
  let component: CdkVirtualScrollPresentationComponent;
  let fixture: ComponentFixture<CdkVirtualScrollPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkVirtualScrollPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkVirtualScrollPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
