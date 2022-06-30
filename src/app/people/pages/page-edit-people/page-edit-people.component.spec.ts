import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPeopleComponent } from './page-edit-people.component';

describe('PageEditPeopleComponent', () => {
  let component: PageEditPeopleComponent;
  let fixture: ComponentFixture<PageEditPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
