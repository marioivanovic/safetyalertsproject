import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPeopleComponent } from './page-list-people.component';

describe('PageListPeopleComponent', () => {
  let component: PageListPeopleComponent;
  let fixture: ComponentFixture<PageListPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
