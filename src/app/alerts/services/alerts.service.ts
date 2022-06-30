import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap } from 'rxjs';
import { StateAlerts } from 'src/app/core/enums/state-alerts';
import { Alert } from 'src/app/core/models/alerts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  public collection$!: Observable<Alert[]>;
  public subCollection$ = new Subject<Alert[]>();
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Alert[]>(`${this.urlApi}/alerts`).pipe(
      map(tabObj => {
        return tabObj.map(obj => {
          return new Alert(obj);
        });
      })
    );
  }

  public loadAlerts(): Observable<Alert[]> {
    return this.collection$.pipe(
      tap((listAlert: Alert[]) => this.subCollection$.next(listAlert))
    );
  }

  public refreshCollection(): void {
    // On se sert de notre flux de donnée type observable froid
    this.collection$.subscribe((listAlert: Alert[]) => {
      // Utiliser un observable chaud (subject) pour nexter nos données recues de notre observable froid
      this.subCollection$.next(listAlert);
    });
  }

  public update(alert: Alert): Observable<Alert> {
    return this.http.put<Alert>(`${this.urlApi}/alerts/${alert.id}`, alert);
  }

  public changeState(alert: Alert, state: StateAlerts): Observable<Alert> {
    const alertToUpdate = new Alert({ ...alert, state });
    return this.update(alertToUpdate);
  }

  public add(alert: Alert): Observable<Alert> {
    return this.http.post<Alert>(`${this.urlApi}/alerts`, alert);
  }

  public getById(alertId: number): Observable<Alert> {
    return this.http.get<Alert>(`${this.urlApi}/alerts/${alertId}`);
  }

  public deleteById(alertId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/alerts/${alertId}`);
  }
}
