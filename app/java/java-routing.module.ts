import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './java.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
   {path:'', component:JavaComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes), CommonModule],    
    exports: [RouterModule]
})

export class JavaRoutingModule{

}