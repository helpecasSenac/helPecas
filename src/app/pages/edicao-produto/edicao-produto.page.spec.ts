import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdutoPage } from './edicao-produto.page';

describe('EdicaoProdutoPage', () => {
  let component: EdicaoProdutoPage;
  let fixture: ComponentFixture<EdicaoProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
