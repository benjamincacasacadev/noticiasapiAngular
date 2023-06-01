import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGeneralComponent } from './chart-general.component';

describe('ChartGeneralComponent', () => {
  let component: ChartGeneralComponent;
  let fixture: ComponentFixture<ChartGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartGeneralComponent]
    });
    fixture = TestBed.createComponent(ChartGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
