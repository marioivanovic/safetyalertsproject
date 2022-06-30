import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddAlertComponent } from './pages/page-add-alert/page-add-alert.component';
import { PageEditAlertComponent } from './pages/page-edit-alert/page-edit-alert.component';
import { PageListAlertsComponent } from './pages/page-list-alert/page-list-alert.component';

const routes: Routes = [
  {
    path: '',
    component: PageListAlertsComponent,
    children: [
      { path: 'add', component: PageAddAlertComponent },
      { path: 'edit/:id', component: PageEditAlertComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsRoutingModule {}
