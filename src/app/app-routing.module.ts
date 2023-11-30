import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './Comnponent/emp-list/emp-list.component';
import { EmpAddComponent } from './Comnponent/emp-add/emp-add.component';
import { EmpEditComponent } from './Comnponent/emp-edit/emp-edit.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmpListComponent,
    children: [
      {
        path: 'add',
        component: EmpAddComponent,
      },
      {
        path: 'edit',
        component: EmpEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
