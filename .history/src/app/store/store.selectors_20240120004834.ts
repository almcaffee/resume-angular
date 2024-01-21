import { createSelector } from '@ngrx/store';
import { RootState } from './store.reducer';

export const getState = (state: RootState) => state;
export const getCompanies = (state: RootState) => state.companies;
export const getTitles = (state: RootState) => state.titles;
export const getLanguages = (state: RootState) => state.languages;

export const selectPositions = (state: RootState) => state.positions;
export const selectCompanies = (state: RootState) => state.companies;

export const selectCompany = (id: number) =>
  createSelector(getState, (state: RootState) =>
    state.companies.find((company) => company.id === id),
  );

export const selectPosition = createSelector(
  getState,
  (state: RootState) => state.activePosition,
);

export const selectTitles = createSelector(getState, getTitles);

export const selectLanguages = createSelector(getState, getLanguages);
