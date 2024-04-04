import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterDisplayComponent } from './perimeter-display.component';

describe('PerimeterDisplayComponent', () => {
  let component: PerimeterDisplayComponent;
  let fixture: ComponentFixture<PerimeterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerimeterDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerimeterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
