import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipliComponent } from './multipli.component';

describe('MultipliComponent', () => {
  let component: MultipliComponent;
  let fixture: ComponentFixture<MultipliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
