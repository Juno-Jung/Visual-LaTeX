import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftButtonsComponent } from './left-buttons.component';

describe('LeftButtonsComponent', () => {
  let component: LeftButtonsComponent;
  let fixture: ComponentFixture<LeftButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
