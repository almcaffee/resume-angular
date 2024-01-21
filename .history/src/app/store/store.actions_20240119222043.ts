import { createAction, props } from '@ngrx/store';

export const getPosition = createAction(
  '[Experience Component] Get Position',
  props<{ index: number }>(),
);
export const getPositions = createAction(
  '[Experience Component] Get Positions',
);
export const getPositionsList = createAction(
  '[Counter Component] Get Positions List',
  props<{ index: number; showId: boolean }>(),
);
