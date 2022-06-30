import { createReducer, on } from '@ngrx/store';
import { Alert } from 'src/app/core/models/alerts';
import {
  addAlertActionSuccess,
  deleteAlertByIdActionSuccess,
  editAlertActionSuccess,
  getAllAlertsActionSuccess
} from '../actions/alerts.actions';

export interface AlertsState {
  alerts: Alert[];
  error: any;
  selectedAlert: Alert | null;
}

export const initialAlertsState: AlertsState = {
  alerts: [],
  error: null,
  selectedAlert: null
};

export const alertsFeatureKey = 'alerts';

export const alertReducer = createReducer(
  initialAlertsState,
  on(
    getAllAlertsActionSuccess,
    (state: AlertsState, { alerts }: { alerts: Alert[] }) => {
      return {
        ...state,
        alerts: [...alerts]
      };
    }
  ),
  on(
    deleteAlertByIdActionSuccess,
    (state: AlertsState, { id }: { id: number }) => {
      console.log('DELETE STATE ', id);
      const newStateAlert = state.alerts.filter(
        (alert: Alert) => alert.id !== id
      );
      return {
        ...state,
        alerts: [...newStateAlert]
      };
    }
  ),
  on(
    addAlertActionSuccess,
    (state: AlertsState, { alert }: { alert: Alert }) => {
      return {
        ...state,
        alerts: [...state.alerts, new Alert(alert)]
      };
    }
  ),
  on(
    editAlertActionSuccess,
    (state: AlertsState, { updatedAlert }: { updatedAlert: Alert }) => {
      const newStateAlert = state.alerts.map((alert: Alert) =>
        alert.id === updatedAlert.id ? new Alert(updatedAlert) : alert
      );
      console.log(newStateAlert);
      return {
        ...state,
        alerts: [...newStateAlert]
      };
    }
  )
);
