import { createReducer, on } from '@ngrx/store';
import { addCompanies, addPositions } from './store.actions';
import { Experience, IndexList } from '../models';

export const initialState: Readonly<{ positions: Array<Experience>, activePosition?: Experience, companies: Array<IndexList>, titles: Array<string>, languages: Array<Experience> }> = {
  positions: [],
  companies: [],
  titles: [],
  languages: [],
  activePosition: undefined,
};

const _resumeReducer = createReducer(
  initialState,
  on(addPositions, (state, { positions }) => ({ ...state, positions }),
  on(addCompanies, (state, companies ) => ({ ...state, companies }),
);

export function resumeReducer(state, action) {
  return _resumeReducer(state, action);
}
