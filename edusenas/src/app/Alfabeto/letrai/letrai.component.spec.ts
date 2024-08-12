import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraiComponent } from './letrai.component';

describe('LetraiComponent', () => {
  let component: LetraiComponent;
  let fixture: ComponentFixture<LetraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
