import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewStudentsComponent } from './all-new-students.component';

describe('AllNewStudentsComponent', () => {
  let component: AllNewStudentsComponent;
  let fixture: ComponentFixture<AllNewStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNewStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
