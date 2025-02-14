import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctubreComponent } from './octubre.component';

describe('OctubreComponent', () => {
  let component: OctubreComponent;
  let fixture: ComponentFixture<OctubreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctubreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OctubreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
