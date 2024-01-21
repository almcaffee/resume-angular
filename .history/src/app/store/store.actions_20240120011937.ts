import { createAction, props } from '@ngrx/store';
import { IndexList, Position } from '../models';

export const addPositions = createAction(
  'Set Positions',
  props<{ positions: Array<Position> }>(),
);

export const addCompanies = createAction(
  'Set Companies',
  props<{ companies: Array<IndexList> }>(),
);

export const setPosition = createAction(
  'Set Position',
  props<{ position: Position }>(),
);
