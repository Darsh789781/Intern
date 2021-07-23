import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkContainerComponent } from './cdk-container.component';

describe('CdkContainerComponent', () => {
  let component: CdkContainerComponent;
  let fixture: ComponentFixture<CdkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
