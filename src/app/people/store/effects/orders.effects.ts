import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { StatePeople } from 'src/app/core/enums/state-people';
import { People } from 'src/app/core/models/people';
import { PeoplesService } from '../../services/peoples.service';
import {
  addPeopleAction,
  addPeopleActionFailure,
  addPeopleActionSuccess,
  deletePeopleByIdAction,
  deletePeopleByIdActionFailure,
  deletePeopleByIdActionSuccess,
  editPeopleAction,
  editPeopleActionFailure,
  editPeopleActionSuccess,
  getAllPeoplesAction,
  getAllPeoplesActionFailure,
  getAllPeoplesActionSuccess
} from '../actions/peoples.actions';

@Injectable()
export class PeoplesEffects {
  constructor(
    private store: Store,
    private peoplesService: PeoplesService,
    private actions$: Actions
  ) {}

  getAllPeoplesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllPeoplesAction),
      switchMap(() => {
        return this.peoplesService.loadPeoples().pipe(
          map((peoples: People[]) =>
            getAllPeoplesActionSuccess({ peoples: peoples })
          ),
          catchError(error => of(getAllPeoplesActionFailure({ error })))
        );
      })
    );
  });

  deletePeopleByIdEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePeopleByIdAction),
      switchMap(({ id }) => {
        return this.peoplesService.deleteById(id).pipe(
          map(() => deletePeopleByIdActionSuccess({ id: id })),
          catchError(error => of(deletePeopleByIdActionFailure({ error })))
        );
      })
    );
  });

  addOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPeopleAction),
      switchMap(({ people }: { people: People }) => {
        return this.peoplesService.add(people).pipe(
          map((people: People) => addPeopleActionSuccess({ people: people })),
          catchError(error => of(addPeopleActionFailure({ error })))
        );
      })
    );
  });

  editPeopleEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editPeopleAction),
      switchMap(({ peopleToUpdate }: { peopleToUpdate: People }) => {
        return this.peoplesService.update(peopleToUpdate).pipe(
          map((updatedPeople: People) =>
            editPeopleActionSuccess({ updatedPeople: updatedPeople })
          ),
          catchError(error => of(editPeopleActionFailure({ error })))
        );
      })
    );
  });
}
