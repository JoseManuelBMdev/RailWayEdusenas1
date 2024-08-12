import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienComponent } from './quien.component';

describe('QuienComponent', () => {
  let component: QuienComponent;
  let fixture: ComponentFixture<QuienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
