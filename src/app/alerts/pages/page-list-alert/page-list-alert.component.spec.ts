import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAlertsComponent } from './page-list-alert.component';

describe('PageListAlertComponent', () => {
  let component: PageListAlertsComponent;
  let fixture: ComponentFixture<PageListAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListAlertsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
