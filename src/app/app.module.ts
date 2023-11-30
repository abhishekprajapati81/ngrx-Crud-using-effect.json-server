import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './Comnponent/emp-list/emp-list.component';
import { EmpAddComponent } from './Comnponent/emp-add/emp-add.component';
import { EmpEditComponent } from './Comnponent/emp-edit/emp-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/emp.reducer';
import { EmployeeFacade } from './store/emp.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { employeeEffect } from './store/emp.effect';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpAddComponent,
    EmpEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ employee: employeeReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([employeeEffect]),
  ],
  providers: [EmployeeFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
