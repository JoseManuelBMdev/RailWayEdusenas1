import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraoComponent } from './letrao.component';

describe('LetraoComponent', () => {
  let component: LetraoComponent;
  let fixture: ComponentFixture<LetraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetraoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
