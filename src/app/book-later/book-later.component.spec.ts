import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLaterComponent } from './book-later.component';

describe('BookLaterComponent', () => {
  let component: BookLaterComponent;
  let fixture: ComponentFixture<BookLaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookLaterComponent]
    });
    fixture = TestBed.createComponent(BookLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
