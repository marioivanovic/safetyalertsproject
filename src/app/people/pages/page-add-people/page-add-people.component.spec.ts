import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddPeopleComponent } from './page-add-people.component';

describe('PageAddPeopleComponent', () => {
  let component: PageAddPeopleComponent;
  let fixture: ComponentFixture<PageAddPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
