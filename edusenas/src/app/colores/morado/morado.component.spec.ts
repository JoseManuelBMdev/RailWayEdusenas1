import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoComponent } from './morado.component';

describe('MoradoComponent', () => {
  let component: MoradoComponent;
  let fixture: ComponentFixture<MoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
