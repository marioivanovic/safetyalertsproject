import { createFeatureSelector, createSelector } from "@ngrx/store";
import { alertsFeatureKey, AlertsState } from "../reducers/alerts.reducers";

export const AlertsFeature = createFeatureSelector<AlertsState>(alertsFeatureKey);

export const selectAllAlerts = createSelector(
    AlertsFeature,
    (state:AlertsState) => {
        return state.alerts
    }
)
