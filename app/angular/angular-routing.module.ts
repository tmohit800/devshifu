import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from './paginate.component';

const routes: Routes = [
    {path:'', component: AngularComponent},
    {path:'paginate', component: PaginateComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes), CommonModule],    
    exports: [RouterModule]
})

export class AngularRoutingModule{
}