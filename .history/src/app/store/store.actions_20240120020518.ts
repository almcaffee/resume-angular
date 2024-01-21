import { createAction, props } from '@ngrx/store';
import { IndexList, Position } from '../models';

export const addPositions = createAction(
  '[Experience] Set Positions',
  props<{ positions: Array<Position> }>(),
);

export const addCompanies = createAction(
  '[Experience] Set Companies',
  props<{ companies: Array<IndexList> }>(),
);

export const setPosition = createAction(
  '[Experience] Set Position',
  props<{ position: Position }>(),
);
