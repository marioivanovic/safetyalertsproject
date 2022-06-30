import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditAlertComponent } from './page-edit-alert.component';

describe('PageEditAlertComponent', () => {
  let component: PageEditAlertComponent;
  let fixture: ComponentFixture<PageEditAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
