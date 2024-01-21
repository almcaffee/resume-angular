import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { RootState } from './store.reducer';

export const getState = (state: RootState) => state;
export const getCompanies = (state: RootState) => state.companies;
export const getTitles = (state: RootState) => state.titles;
export const getLanguages = (state: RootState) => state.languages;

export const rootFeature: MemoizedSelector<{ root?: RootState }, RootState> =
  createFeatureSelector<RootState>('root');

export const selectPositions = () =>
  createSelector(rootFeature, (state: RootState) => state.positions);

export const selectCompanies = () =>
  createSelector(rootFeature, (state: RootState) => state.companies);

export const selectCompany = (id: number) =>
  createSelector(rootFeature, (state: RootState) =>
    state.companies.find((company) => company.id === id),
  );

export const selectPosition = () =>
  createSelector(rootFeature, (state: RootState) => state.activePosition);

export const selectPositionData = () =>
  createSelector(rootFeature, (state: RootState) => state.activePositionData);

export const selectTitles = () =>
  createSelector(rootFeature, (state: RootState) => state.titles);

export const selectLanguages = () =>
  createSelector(rootFeature, (state: RootState) => state.languages);

export const selectToastMessage = () =>
  createSelector(rootFeature, (state: RootState) => state.toastMessage);
