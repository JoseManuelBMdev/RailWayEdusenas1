import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrapComponent } from './letrap.component';

describe('LetrapComponent', () => {
  let component: LetrapComponent;
  let fixture: ComponentFixture<LetrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
