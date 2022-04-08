/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DisciplinasComponent } from './disciplinas.component';

describe('DisciplinasComponent', () => {
  let component: DisciplinasComponent;
  let fixture: ComponentFixture<DisciplinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
