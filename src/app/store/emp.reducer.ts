import { createReducer, on } from '@ngrx/store';
import { EMPLOYEE_STATE, adapter, initialState } from './emp.state';
import { empActions } from './emp.action';

export const employeeReducer = createReducer<EMPLOYEE_STATE>(
  initialState,
  on(empActions.getAllEmployeeSuccess, (state, { employeeList }) => {
    return adapter.setAll(employeeList, state);
  }),
  on(empActions.getAllEmployeeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(empActions.addNewEmployeeSuccess, (state, { newEmp }) => {
    return adapter.addOne(newEmp, state);
  }),
  on(empActions.getAllEmployeeFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
