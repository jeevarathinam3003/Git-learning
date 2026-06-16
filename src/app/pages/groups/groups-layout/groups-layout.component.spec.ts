import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsLayoutComponent } from './groups-layout.component';

describe('GroupsLayoutComponent', () => {
  let component: GroupsLayoutComponent;
  let fixture: ComponentFixture<GroupsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
