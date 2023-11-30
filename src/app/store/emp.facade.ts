import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmployee } from './emp.selector';
import { empActions } from './emp.action';
import { Empolyee } from '../Interface/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  store = inject(Store);
  empList$ = this.store.select(selectEmployee);

  getAllEmployeeData() {
    this.store.dispatch(empActions.getAllEmployee());
  }
  getNewEmployeeData(newEmp: Empolyee) {
    this.store.dispatch(empActions.addNewEmployee({ newEmp }));
  }
}
