import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroIconsComponent } from './pomodoro-icons.component';

describe('PomodoroIconsComponent', () => {
  let component: PomodoroIconsComponent;
  let fixture: ComponentFixture<PomodoroIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
