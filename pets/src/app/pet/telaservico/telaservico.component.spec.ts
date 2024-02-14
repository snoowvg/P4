import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaservicoComponent } from './telaservico.component';

describe('TelaservicoComponent', () => {
  let component: TelaservicoComponent;
  let fixture: ComponentFixture<TelaservicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaservicoComponent]
    });
    fixture = TestBed.createComponent(TelaservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
