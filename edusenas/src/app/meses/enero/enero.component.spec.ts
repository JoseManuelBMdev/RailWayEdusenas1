import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EneroComponent } from './enero.component';

describe('EneroComponent', () => {
  let component: EneroComponent;
  let fixture: ComponentFixture<EneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
