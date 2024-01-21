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

export const addTitles = createAction(
  '[Experience Component] Set Companies',
  props<{ titles: Array<string> }>(),
);

export const setPosition = createAction(
  '[Experience Component] Set Position',
  props<{ position: Position }>(),
);

export const setPositionData = createAction(
  '[Experience Component] Set Position',
  props<{ data: any }>(),
);
