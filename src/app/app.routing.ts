import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { SubmittedComponent } from './components/submitted/submitted.component';

const appRoutes = [
    {
        path: 'form',
        component: FormComponent,
    },
    {
        path: 'submitted',
        component: SubmittedComponent,
    },
    {
        path: '',
        redirectTo: '/form',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: FormComponent,
    }
];


@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }