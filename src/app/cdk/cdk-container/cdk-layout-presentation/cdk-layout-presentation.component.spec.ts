import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkLayoutPresentationComponent } from './cdk-layout-presentation.component';

describe('CdkLayoutPresentationComponent', () => {
  let component: CdkLayoutPresentationComponent;
  let fixture: ComponentFixture<CdkLayoutPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkLayoutPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkLayoutPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
