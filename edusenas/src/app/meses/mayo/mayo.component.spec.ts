import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoComponent } from './mayo.component';

describe('MayoComponent', () => {
  let component: MayoComponent;
  let fixture: ComponentFixture<MayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
