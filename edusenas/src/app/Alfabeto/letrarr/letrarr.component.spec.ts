import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrarrComponent } from './letrarr.component';

describe('LetrarrComponent', () => {
  let component: LetrarrComponent;
  let fixture: ComponentFixture<LetrarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrarrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
