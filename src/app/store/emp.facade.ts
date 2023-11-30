import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmployee } from './emp.selector';
import { empActions } from './emp.action';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  store = inject(Store);
  empList$ = this.store.select(selectEmployee);

  getAllEmployeeData() {
    this.store.dispatch(empActions.getAllEmployee());
  }
}
