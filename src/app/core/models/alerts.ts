import { StateAlerts } from '../enums/state-alerts';
import { AlertI } from '../interfaces/alert-i';

export class Alert implements AlertI {
  noms!: string;
  descriptions!: string;
  state = StateAlerts.OPTION;
  id!: number;
  constructor(obj?: Partial<Alert>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
