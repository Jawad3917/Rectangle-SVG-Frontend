import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFigureComponent } from './svg-figure.component';

describe('SvgFigureComponent', () => {
  let component: SvgFigureComponent;
  let fixture: ComponentFixture<SvgFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgFigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
