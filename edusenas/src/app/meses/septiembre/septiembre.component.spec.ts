import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptiembreComponent } from './septiembre.component';

describe('SeptiembreComponent', () => {
  let component: SeptiembreComponent;
  let fixture: ComponentFixture<SeptiembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptiembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeptiembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
