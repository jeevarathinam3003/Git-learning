import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingLayoutComponent } from './meeting-layout.component';

describe('MembersLayoutComponent', () => {
  let component: MeetingLayoutComponent;
  let fixture: ComponentFixture<MeetingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
