import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresPage } from './fornecedores.page';

describe('FornecedoresPage', () => {
  let component: FornecedoresPage;
  let fixture: ComponentFixture<FornecedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
