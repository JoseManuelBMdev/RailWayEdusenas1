import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetracComponent } from './letrac.component';

describe('LetracComponent', () => {
  let component: LetracComponent;
  let fixture: ComponentFixture<LetracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
