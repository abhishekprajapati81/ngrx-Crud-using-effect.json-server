import { Injectable, inject } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { empActions } from './emp.action';
import { map, mergeMap } from 'rxjs';

Injectable();

export class employeeEffect {
  action$ = inject(Actions);
  _httpService = inject(HttpService);

  loadEmployee$ = createEffect(() =>
    this.action$.pipe(
      ofType(empActions.getAllEmployee),
      mergeMap(() =>
        this._httpService.getEmployee().pipe(
          map((emp) => {
            empActions.getAllEmployeeSuccess({ emp });
          })
        )
      )
    )
  );
}
