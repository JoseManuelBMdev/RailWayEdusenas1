import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetratComponent } from './letrat.component';

describe('LetratComponent', () => {
  let component: LetratComponent;
  let fixture: ComponentFixture<LetratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
