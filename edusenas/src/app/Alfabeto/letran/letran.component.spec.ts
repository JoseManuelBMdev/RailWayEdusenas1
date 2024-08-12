import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetranComponent } from './letran.component';

describe('LetranComponent', () => {
  let component: LetranComponent;
  let fixture: ComponentFixture<LetranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
