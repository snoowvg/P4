import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelapetComponent } from './telapet.component';

describe('TelapetComponent', () => {
  let component: TelapetComponent;
  let fixture: ComponentFixture<TelapetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelapetComponent]
    });
    fixture = TestBed.createComponent(TelapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
