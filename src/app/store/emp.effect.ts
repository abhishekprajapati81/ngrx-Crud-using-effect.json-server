import { Injectable, inject } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { empActions } from './emp.action';
import { catchError, map, mergeMap, of } from 'rxjs';

Injectable();

export class employeeEffect {
  action$ = inject(Actions);
  _httpService = inject(HttpService);

  loadEmployee$ = createEffect(() =>
    this.action$.pipe(
      ofType(empActions.getAllEmployee),
      mergeMap(() =>
        this._httpService.getEmployee().pipe(
          map((employeeList) =>
            empActions.getAllEmployeeSuccess({ employeeList })
          ),
          catchError((error) => of(empActions.getAllEmployeeFailure({ error })))
        )
      )
    )
  );

  addEmployee$ = createEffect(() =>
    this.action$.pipe(
      ofType(empActions.addNewEmployee),
      mergeMap((action) =>
        this._httpService.getNewEmployee(action.newEmp).pipe(
          map((newEmp) => empActions.addNewEmployeeSuccess({ newEmp })),
          catchError((error) => of(empActions.addNewEmployeeFailure({ error })))
        )
      )
    )
  );
}
