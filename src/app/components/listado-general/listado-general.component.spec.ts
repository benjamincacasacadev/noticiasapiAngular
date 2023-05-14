import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGeneralComponent } from './listado-general.component';

describe('ListadoGeneralComponent', () => {
  let component: ListadoGeneralComponent;
  let fixture: ComponentFixture<ListadoGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoGeneralComponent]
    });
    fixture = TestBed.createComponent(ListadoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
