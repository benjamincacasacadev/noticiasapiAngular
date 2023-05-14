import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFechaComponent } from './formulario-fecha.component';

describe('FormularioFechaComponent', () => {
  let component: FormularioFechaComponent;
  let fixture: ComponentFixture<FormularioFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFechaComponent]
    });
    fixture = TestBed.createComponent(FormularioFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
