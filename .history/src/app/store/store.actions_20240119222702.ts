import { createAction, props } from '@ngrx/store';

export const getPosition = createAction(
  '[Experience Component] Get Position',
  props<{ id: number }>(),
);
export const getPositions = createAction(
  '[Experience Component] Get Positions',
);
export const getPositionsList = createAction(
  '[Counter Component] Get Positions List',
  props<{ propr: string; showId: boolean }>(),
);
