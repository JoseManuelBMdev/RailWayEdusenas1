import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrakComponent } from './letrak.component';

describe('LetrakComponent', () => {
  let component: LetrakComponent;
  let fixture: ComponentFixture<LetrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
