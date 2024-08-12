import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrisComponent } from './gris.component';

describe('GrisComponent', () => {
  let component: GrisComponent;
  let fixture: ComponentFixture<GrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
