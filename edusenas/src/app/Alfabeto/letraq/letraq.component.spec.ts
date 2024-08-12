import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraqComponent } from './letraq.component';

describe('LetraqComponent', () => {
  let component: LetraqComponent;
  let fixture: ComponentFixture<LetraqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
