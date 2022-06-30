import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPeopleComponent } from './pages/page-add-people/page-add-people.component';
import { PageEditPeopleComponent } from './pages/page-edit-people/page-edit-people.component';
import { PageListPeoplesComponent } from './pages/page-list-people/page-list-people.component';

const routes: Routes = [
  { path: '', component: PageListPeoplesComponent },
  { path: 'add', component: PageAddPeopleComponent },
  { path: 'edit/:id', component: PageEditPeopleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule {}
