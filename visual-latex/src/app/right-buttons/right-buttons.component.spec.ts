import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightButtonsComponent } from './right-buttons.component';

describe('RightButtonsComponent', () => {
  let component: RightButtonsComponent;
  let fixture: ComponentFixture<RightButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
