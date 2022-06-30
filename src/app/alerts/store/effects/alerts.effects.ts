import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { StateAlerts } from 'src/app/core/enums/state-alerts';
import { Alert } from 'src/app/core/models/alerts';
import { AlertsService } from '../../services/alerts.service';
import {
  addAlertAction,
  addAlertActionFailure,
  addAlertActionSuccess,
  deleteAlertByIdAction,
  deleteAlertByIdActionFailure,
  deleteAlertByIdActionSuccess,
  editAlertAction,
  editAlertActionFailure,
  editAlertActionSuccess,
  getAllAlertsAction,
  getAllAlertsActionFailure,
  getAllAlertsActionSuccess
} from '../actions/alerts.actions';

@Injectable()
export class AlertsEffects {
  constructor(
    private store: Store,
    private alertsService: AlertsService,
    private actions$: Actions
  ) {}

  getAllAlertsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllAlertsAction),
      switchMap(() => {
        return this.alertsService.loadAlerts().pipe(
          map((alerts: Alert[]) =>
            getAllAlertsActionSuccess({ alerts: alerts })
          ),
          catchError(error => of(getAllAlertsActionFailure({ error })))
        );
      })
    );
  });

  deleteAlertByIdEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteAlertByIdAction),
      switchMap(({ id }) => {
        return this.alertsService.deleteById(id).pipe(
          map(() => deleteAlertByIdActionSuccess({ id: id })),
          catchError(error => of(deleteAlertByIdActionFailure({ error })))
        );
      })
    );
  });

  addAlertEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addAlertAction),
      switchMap(({ alert }: { alert: Alert }) => {
        return this.alertsService.add(alert).pipe(
          map((alert: Alert) => addAlertActionSuccess({ alert: alert })),
          catchError(error => of(addAlertActionFailure({ error })))
        );
      })
    );
  });

  editAlertEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editAlertAction),
      switchMap(({ alertToUpdate }: { alertToUpdate: Alert }) => {
        return this.alertsService.update(alertToUpdate).pipe(
          map((updatedAlert: Alert) =>
            editAlertActionSuccess({ updatedAlert: updatedAlert })
          ),
          catchError(error => of(editAlertActionFailure({ error })))
        );
      })
    );
  });
}
