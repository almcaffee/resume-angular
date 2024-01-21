import { Action, createReducer, on } from '@ngrx/store';
import {
  addCompanies,
  addPositions,
  addTitles,
  setPosition,
} from './store.actions';
import { Experience, IndexList, Position } from '../models';

export interface RootState {
  positions: Array<Position>;
  activeExperience?: Experience;
  activePosition?: Position;
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
  on(addTitles, (state, { titles }) => ({ ...state, titles })),
  on(addCompanies, (state, { companies }) => ({ ...state, companies })),
  on(setPosition, (state, { position }) => ({
    ...state,
    activePosition: position,
  })),
);

export function rootReducer(state: RootState | undefined, action: Action) {
  return _rootReducer(state, action);
}
