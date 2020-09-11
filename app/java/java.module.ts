import { NgModule } from "@angular/core";
import { JavaComponent } from './java.component';
import { JavaRoutingModule } from './java-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[JavaComponent],
    imports:[JavaRoutingModule, CommonModule],
    providers:[]
})

export class JavaModule{
    constructor(){console.log("Java Module loaded")}
}