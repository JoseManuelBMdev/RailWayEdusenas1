import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrannComponent } from './letrann.component';

describe('LetrannComponent', () => {
  let component: LetrannComponent;
  let fixture: ComponentFixture<LetrannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrannComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
