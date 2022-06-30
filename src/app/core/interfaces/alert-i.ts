import { StateAlerts } from '../enums/state-alerts';

export interface AlertI {
  noms: string;
  descriptions: string;
  state: StateAlerts;
  id: number;
}
