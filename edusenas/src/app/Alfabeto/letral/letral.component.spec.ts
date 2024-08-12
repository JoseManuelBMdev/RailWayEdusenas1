import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetralComponent } from './letral.component';

describe('LetralComponent', () => {
  let component: LetralComponent;
  let fixture: ComponentFixture<LetralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
