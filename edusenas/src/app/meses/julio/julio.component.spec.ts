import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulioComponent } from './julio.component';

describe('JulioComponent', () => {
  let component: JulioComponent;
  let fixture: ComponentFixture<JulioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JulioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JulioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
