import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrafComponent } from './letraf.component';

describe('LetrafComponent', () => {
  let component: LetrafComponent;
  let fixture: ComponentFixture<LetrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
