import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialisteComponent } from './new-specialiste.component';

describe('NewSpecialisteComponent', () => {
  let component: NewSpecialisteComponent;
  let fixture: ComponentFixture<NewSpecialisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpecialisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecialisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
