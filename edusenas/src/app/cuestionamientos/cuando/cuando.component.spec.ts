import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuandoComponent } from './cuando.component';

describe('CuandoComponent', () => {
  let component: CuandoComponent;
  let fixture: ComponentFixture<CuandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuandoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
