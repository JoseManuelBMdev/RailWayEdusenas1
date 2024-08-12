import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrallComponent } from './letrall.component';

describe('LetrallComponent', () => {
  let component: LetrallComponent;
  let fixture: ComponentFixture<LetrallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
