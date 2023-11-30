import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EMPLOYEE_STATE, adapter } from './emp.state';

export const selectEmployeeState =
  createFeatureSelector<EMPLOYEE_STATE>('employee');

export const selectEmployee = createSelector(
  selectEmployeeState,
  adapter.getSelectors().selectAll
);
