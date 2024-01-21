import { Action, createReducer, on } from '@ngrx/store';
import { addCompanies, addPositions } from './store.actions';
import { Experience, IndexList, Position } from '../models';

export interface RootState {
  positions: Array<Position>;
  activePosition?: Experience;
  companies: Array<IndexList>;
  titles: Array<string>;
  languages: Array<Experience>;
}
export const initialState: RootState = {
  positions: [],
  companies: [],
  titles: [],
  languages: [],
  activePosition: undefined,
};

const _rootReducer = createReducer(
  initialState,
  on(addPositions, (state, { positions }) => ({ ...state, positions })),
  on(addCompanies, (state, { companies }) => ({ ...state, companies })),
);

export function rootReducer(state: RootState, action: Action) {
  return _rootReducer(state, action);
}
