import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraaComponent } from './letraa.component';

describe('LetraaComponent', () => {
  let component: LetraaComponent;
  let fixture: ComponentFixture<LetraaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
