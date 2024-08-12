import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaranjaComponent } from './naranja.component';

describe('NaranjaComponent', () => {
  let component: NaranjaComponent;
  let fixture: ComponentFixture<NaranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaranjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
