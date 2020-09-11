import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { IdleSystemComponent } from './idle-system/idle-system.component';
import { WorkingWithLibrariesComponent } from './working-with-libraries/working-with-libraries.component';
import { ComponentDataSharingComponent } from './component-data-sharing/component-data-sharing.component';
import { AngularInstallationComponent } from './angular-installation/angular-installation.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
    {path:'about', component: AngularComponent},
    {path:'paginate', component: PaginatorComponent},
    {path:'angularinstallation', component: AngularInstallationComponent},
    {path:'multiselectdropdown', component: MultiSelectDropdownComponent},
    {path:'idlesystem', component: IdleSystemComponent},
    {path:'workingwithlibraries', component: WorkingWithLibrariesComponent},
    {path:'datasharingbetweencomponent', component: ComponentDataSharingComponent},
    {path:'datepicker', component:DatepickerComponent},
    {path:'**', redirectTo: 'about', pathMatch:'full'}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes), CommonModule],    
    exports: [RouterModule]
})

export class AngularRoutingModule{
}