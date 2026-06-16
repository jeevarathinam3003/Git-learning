import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimLayoutComponent } from './claim-layout.component';

describe('ClaimLayoutComponent', () => {
  let component: ClaimLayoutComponent;
  let fixture: ComponentFixture<ClaimLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
