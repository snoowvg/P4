import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaemitirnotaComponent } from './telaemitirnota.component';

describe('TelaemitirnotaComponent', () => {
  let component: TelaemitirnotaComponent;
  let fixture: ComponentFixture<TelaemitirnotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaemitirnotaComponent]
    });
    fixture = TestBed.createComponent(TelaemitirnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
