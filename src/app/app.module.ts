import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { ListemployesComponent } from './listemployes/listemployes.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ListemployesComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
