import { NgModule } from "@angular/core";
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WorkingWithLibrariesComponent } from './working-with-libraries/working-with-libraries.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
    declarations:[AngularComponent, WorkingWithLibrariesComponent, DatepickerComponent],
    imports:[
        AngularRoutingModule, 
        CommonModule,
        MatDatepickerModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatInputModule,
        MomentDateModule,
        MatDatepickerModule
    ],
    providers:[
        {provide: MAT_DATE_FORMATS, useValue:{
            display: {
              dateInput: 'DD/MM/YYYY',
              monthYearLabel: 'MMM YYYY',
              dateA11yLabel: 'LL',
              monthYearA11yLabel: 'MMMM YYYY'
            }
          }},
    ]
})

export class AngularModule{
    constructor(){console.log("Angular Module loaded")}
}