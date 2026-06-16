import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersLayoutComponent } from './members-layout.component';

describe('MembersLayoutComponent', () => {
  let component: MembersLayoutComponent;
  let fixture: ComponentFixture<MembersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembersLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
