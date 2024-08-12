import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraxComponent } from './letrax.component';

describe('LetraxComponent', () => {
  let component: LetraxComponent;
  let fixture: ComponentFixture<LetraxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
