import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddAlertComponent } from './page-add-alert.component';

describe('PageAddAlertComponent', () => {
  let component: PageAddAlertComponent;
  let fixture: ComponentFixture<PageAddAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
