import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraeComponent } from './letrae.component';

describe('LetraeComponent', () => {
  let component: LetraeComponent;
  let fixture: ComponentFixture<LetraeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
