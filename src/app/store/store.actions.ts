import { createAction, props } from '@ngrx/store';
import { Experience, IndexList, Position } from '../models';
import { Message } from 'primeng/api';

export const addPositions = createAction(
  '[Experience Component] Set Positions',
  props<{ positions: Array<Position> }>(),
);

export const addLanguages = createAction(
  '[Experience Component] Set Languages',
  props<{ languages: Array<Experience> }>(),
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
  '[Experience Component] Set Position Data',
  props<{ data: any }>(),
);

export const clearSelectedPosition = createAction(
  '[Experience Component] Clear Position',
);

export const displayToastMessage = createAction(
  '[Experience Component] Send Toast Message',
  props<{ toastMessage: Message }>(),
);
