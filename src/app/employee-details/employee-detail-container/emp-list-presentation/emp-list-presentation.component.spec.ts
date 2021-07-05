import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListPresentationComponent } from './emp-list-presentation.component';

describe('EmpListPresentationComponent', () => {
  let component: EmpListPresentationComponent;
  let fixture: ComponentFixture<EmpListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
