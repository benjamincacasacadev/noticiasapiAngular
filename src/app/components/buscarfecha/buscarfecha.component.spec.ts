import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarfechaComponent } from './buscarfecha.component';

describe('BuscarfechaComponent', () => {
  let component: BuscarfechaComponent;
  let fixture: ComponentFixture<BuscarfechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarfechaComponent]
    });
    fixture = TestBed.createComponent(BuscarfechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
