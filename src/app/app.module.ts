import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//components
import { FormComponent } from './components/form/form.component';
import { SubmittedComponent } from './components/submitted/submitted.component';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

//reactive forms
import { ReactiveFormsModule } from '@angular/forms';

//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

//routing
import { RoutingModule } from './app.routing';

//for expressjs
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//services
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
