import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcarComponent } from './findcar.component';

describe('FindcarComponent', () => {
  let component: FindcarComponent;
  let fixture: ComponentFixture<FindcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindcarComponent]
    });
    fixture = TestBed.createComponent(FindcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
