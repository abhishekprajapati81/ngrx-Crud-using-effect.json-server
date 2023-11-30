import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Empolyee } from '../Interface/employee';

export const empActions = createActionGroup({
  source: 'Employee Action',
  events: {
    getAllEmployee: emptyProps(),
    getAllEmployeeSuccess: props<{ employeeList: Empolyee }>(),
    getAllEmployeeFailure: props<{ error: string }>(),
  },
});
