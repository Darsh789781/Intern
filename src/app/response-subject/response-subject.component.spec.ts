import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSubjectComponent } from './response-subject.component';

describe('ResponseSubjectComponent', () => {
  let component: ResponseSubjectComponent;
  let fixture: ComponentFixture<ResponseSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
