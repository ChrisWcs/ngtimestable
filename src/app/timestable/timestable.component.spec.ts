import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestableComponent } from './timestable.component';

describe('TimestableComponent', () => {
  let component: TimestableComponent;
  let fixture: ComponentFixture<TimestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
