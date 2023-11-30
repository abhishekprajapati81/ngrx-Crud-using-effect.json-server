import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Empolyee } from '../Interface/employee';

export interface EMPLOYEE_STATE extends EntityState<Empolyee> {}

export const adapter = createEntityAdapter<Empolyee>();

export const initialState: EMPLOYEE_STATE = adapter.getInitialState();
