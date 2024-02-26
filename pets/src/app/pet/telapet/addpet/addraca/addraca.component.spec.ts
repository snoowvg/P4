import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddracaComponent } from './addraca.component';

describe('AddracaComponent', () => {
  let component: AddracaComponent;
  let fixture: ComponentFixture<AddracaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddracaComponent]
    });
    fixture = TestBed.createComponent(AddracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
