import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap } from 'rxjs';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { StatePeople } from 'src/app/core/enums/state-people';
import { People } from 'src/app/core/models/people';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService extends ErrorHandler {
  private urlApi = environment.urlApi;
  public collection$: Observable<People[]>;
  public subCollection$ = new Subject<People[]>();
  observable$: any;

  constructor(private http: HttpClient) {
    super();
    this.collection$ = this.http
      .get<People[]>(`${this.urlApi}/listpersons`)
      .pipe(
        map(listObj => {
          return listObj.map(obj => {
            return new People(obj);
          });
        }),
        catchError(this.handleError)
      );
    this.http
      .get(`${this.urlApi}/listpersons`)
      .pipe(catchError(this.handleError))
      .subscribe(data => console.log(data));
  }

  public refreshCollection(): void {
    this.collection$.subscribe((listPeople: People[]) => {
      this.subCollection$.next(listPeople);
    });
  }

  public getById(firstName: string, lastName: string): Observable<People> {
    return this.http.get<People>(
      `${this.urlApi}/person/?firstNameId=${firstName}+lastNameId=${lastName}`
    );
  }

  public add(person: People): Observable<People> {
    return this.http.post<People>(`${this.urlApi}/listpersons`, person);
  }

  public update(
    person: People,
    firstName: string,
    lastName: string
  ): Observable<People> {
    return this.http.put<People>(`${this.urlApi}/person/${person.id}`, person);
  }

  public deleteById(firstName: string, lastName: string): Observable<People> {
    return this.http
      .delete<People>(
        `${this.urlApi}/person/?firstNameId=${firstName}+lastNameId=${lastName}`
      )
      .pipe(tap(() => this.refreshCollection()));
  }
}
