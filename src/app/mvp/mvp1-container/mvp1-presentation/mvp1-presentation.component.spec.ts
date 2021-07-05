import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mvp1PresentationComponent } from './mvp1-presentation.component';

describe('Mvp1PresentationComponent', () => {
  let component: Mvp1PresentationComponent;
  let fixture: ComponentFixture<Mvp1PresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mvp1PresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mvp1PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
