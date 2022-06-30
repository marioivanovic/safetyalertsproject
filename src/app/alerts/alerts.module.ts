import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FormAlertComponent } from './components/form-alert/form-alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  alertReducer,
  alertsFeatureKey
} from './store/reducers/alerts.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsEffects } from './store/effects/alerts.effects';
import { PageAddAlertComponent } from './pages/page-add-alert/page-add-alert.component';
import { PageEditAlertComponent } from './pages/page-edit-alert/page-edit-alert.component';
import { PageListAlertsComponent } from './pages/page-list-alert/page-list-alert.component';

@NgModule({
  declarations: [
    FormAlertComponent,
    PageAddAlertComponent,
    PageEditAlertComponent,
    PageListAlertsComponent
  ],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alertsFeatureKey, alertReducer),
    EffectsModule.forFeature([AlertsEffects])
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
})
export class AlertsModule {}
