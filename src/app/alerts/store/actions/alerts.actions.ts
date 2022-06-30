import { createAction, props } from "@ngrx/store";
import { Alert } from "src/app/core/models/alerts";

export const getAllAlertsAction = createAction(
    '[Alerts] get all alerts'
)

export const getAllAlertsActionSuccess = createAction(
    '[Alerts] get all alerts success', props<{alerts: Alert[]}>()
)

export const getAllAlertsActionFailure = createAction(
    '[Alerts] get all alerts failure', props<{error: any}>()
)

export const deleteAlertByIdAction = createAction(
    '[Alerts] delete alert by id', props<{id: number}>()
)

export const deleteAlertByIdActionSuccess = createAction(
    '[Alerts] delete alert by id success', props<{id: number}>()
)

export const deleteAlertByIdActionFailure = createAction(
    '[Alerts] delete alert by id failure', props<{error: any}>()
)

export const addAlertAction = createAction(
    '[Alerts] add alert', props<{alert: Alert}>()
)

export const addAlertActionSuccess = createAction(
    '[Alerts] add alert success', props<{alert: Alert}>()
)

export const addAlertActionFailure = createAction(
    '[Alerts] add alert failure', props<{error: any}>()
)

export const editAlertAction = createAction(
    '[Alerts] edit alert', props<{alertToUpdate: Alert}>()
)

export const editAlertActionSuccess = createAction(
    '[Alerts] edit alert success', props<{updatedAlert: Alert}>()
)

export const editAlertActionFailure = createAction(
    '[Alerts] edit alert failure', props<{error: any}>()
)
