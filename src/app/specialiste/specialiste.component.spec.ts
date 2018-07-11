import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisteComponent } from './specialiste.component';

describe('SpecialisteComponent', () => {
  let component: SpecialisteComponent;
  let fixture: ComponentFixture<SpecialisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
