import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiciembreComponent } from './diciembre.component';

describe('DiciembreComponent', () => {
  let component: DiciembreComponent;
  let fixture: ComponentFixture<DiciembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiciembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiciembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
