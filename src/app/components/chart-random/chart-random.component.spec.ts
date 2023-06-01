import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRandomComponent } from './chart-random.component';

describe('ChartRandomComponent', () => {
  let component: ChartRandomComponent;
  let fixture: ComponentFixture<ChartRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartRandomComponent]
    });
    fixture = TestBed.createComponent(ChartRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
