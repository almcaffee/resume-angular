import { Action, createReducer, on } from '@ngrx/store';
import {
  addCompanies,
  addLanguages,
  addPositions,
  addTitles,
  clearSelectedPosition,
  displayToastMessage,
  setPosition,
  setPositionData,
} from './store.actions';
import { Experience, IndexList, Position } from '../models';
import { Message } from 'primeng/api';

export interface RootState {
  positions: Array<Position>;
  activeExperience?: Experience;
  activePosition?: Position;
  activePositionData?: Array<any>; // I know .. ill get back tot his later
  companies: Array<IndexList>;
  titles: Array<string>;
  languages: Array<Experience>;
  toastMessage?: Message;
}
export const initialState: RootState = {
  positions: [],
  companies: [],
  titles: [],
  languages: [],
  activePosition: undefined,
  activePositionData: undefined,
  toastMessage: undefined,
};

const _rootReducer = createReducer(
  initialState,
  on(addPositions, (state, { positions }) => ({ ...state, positions })),
  on(addTitles, (state, { titles }) => ({ ...state, titles })),
  on(addCompanies, (state, { companies }) => ({ ...state, companies })),
  on(addLanguages, (state, { languages }) => ({ ...state, languages })),
  on(setPosition, (state, { position }) => ({
    ...state,
    activePosition: position,
  })),
  on(setPositionData, (state, { data }) => ({
    ...state,
    activePositionData: data,
  })),
  on(clearSelectedPosition, (state) => ({
    ...state,
    activePosition: undefined,
    activePositionData: undefined,
  })),
  on(displayToastMessage, (state, { toastMessage: toastMessage }) => ({
    ...state,
    toastMessage,
  })),
);

export function rootReducer(state: RootState | undefined, action: Action) {
  return _rootReducer(state, action);
}
