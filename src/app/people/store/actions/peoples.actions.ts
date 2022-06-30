import { createAction, props } from '@ngrx/store';
import { People } from 'src/app/core/models/people';

export const getAllPeopleAction = createAction('[Peoples] get all people');

export const getAllPeoplesActionSuccess = createAction(
  '[Peoples] get all peoples success',
  props<{ peoples: People[] }>()
);

export const getAllPeoplesActionFailure = createAction(
  '[Peoples] get all peoples failure',
  props<{ error: any }>()
);

export const deletePeopleByIdAction = createAction(
  '[Peoples] delete people by id',
  props<{ id: number }>()
);

export const deletePeopleByIdActionSuccess = createAction(
  '[Peoples] delete people by id success',
  props<{ id: number }>()
);

export const deletePeopleByIdActionFailure = createAction(
  '[Peoples] delete people by id failure',
  props<{ error: any }>()
);

export const addPeopleAction = createAction(
  '[People] add people',
  props<{ people: People }>()
);

export const addOrderActionSuccess = createAction(
  '[Orders] add order success',
  props<{ order: People }>()
);

export const addOrderActionFailure = createAction(
  '[Orders] add order failure',
  props<{ error: any }>()
);

export const editOrderAction = createAction(
  '[Orders] edit order',
  props<{ orderToUpdate: People }>()
);

export const editOrderActionSuccess = createAction(
  '[Orders] edit order success',
  props<{ updatedOrder: People }>()
);

export const editOrderActionFailure = createAction(
  '[Orders] edit order failure',
  props<{ error: any }>()
);
