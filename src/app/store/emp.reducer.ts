import { createReducer } from '@ngrx/store';
import { EMPLOYEE_STATE, initialState } from './emp.state';

export const employeeReducer = createReducer<EMPLOYEE_STATE>(initialState);
