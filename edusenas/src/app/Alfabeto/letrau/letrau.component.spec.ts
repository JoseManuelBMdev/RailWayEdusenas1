import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrauComponent } from './letrau.component';

describe('LetrauComponent', () => {
  let component: LetrauComponent;
  let fixture: ComponentFixture<LetrauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
