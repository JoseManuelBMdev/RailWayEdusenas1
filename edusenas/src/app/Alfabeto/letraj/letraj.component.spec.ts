import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrajComponent } from './letraj.component';

describe('LetrajComponent', () => {
  let component: LetrajComponent;
  let fixture: ComponentFixture<LetrajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrajComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
