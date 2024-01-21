import { createAction, props } from '@ngrx/store';
import { IndexList, Position } from '../models';

export const addPositions = createAction(
  '[Experience Component] Set Positions',
  props<{ positions: Array<Position> }>(),
);

export const addCompanies = createAction(
  '[Experience Component] Set Companies',
  props<{ companies: Array<IndexList> }>(),
);

// export const getPosition = createAction(
//   '[Experience Component] Get Position',
//   props<{ id: number }>(),
// );
// export const getPositions = createAction(
//   '[Experience Component] Get Positions',
// );
// export const getPositionsList = createAction(
//   '[Counter Component] Get Positions List',
//   props<{ prop: string; showId: boolean }>(),
// );
