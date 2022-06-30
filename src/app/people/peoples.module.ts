import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PageListPeoplesComponent } from './pages/page-list-people/page-list-people.component';
import { PageAddPeopleComponent } from './pages/page-add-people/page-add-people.component';
import { PageEditPeopleComponent } from './pages/page-edit-people/page-edit-people.component';
import { SharedModule } from '../shared/shared.module';
import { FormPeopleComponent } from './components/form-people/form-people.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageListPeoplesComponent,
    PageAddPeopleComponent,
    PageEditPeopleComponent,
    FormPeopleComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
})
export class PeoplesModule {}
