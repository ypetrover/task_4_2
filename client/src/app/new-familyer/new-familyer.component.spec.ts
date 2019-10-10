import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFamilyerComponent } from './new-familyer.component';

describe('NewFamilyerComponent', () => {
  let component: NewFamilyerComponent;
  let fixture: ComponentFixture<NewFamilyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFamilyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFamilyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
