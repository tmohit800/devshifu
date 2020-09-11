import { NgModule } from "@angular/core";
import { JavaComponent } from './java.component';
import { JavaRoutingModule } from './java-routing.module';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { JavaInstallationComponent } from './java-installation/java-installation.component';
import { HowJavaWorksInternallyComponent } from './how-java-works-internally/how-java-works-internally.component';

@NgModule({
    declarations:[JavaComponent, HelloWorldComponent, JavaInstallationComponent, HowJavaWorksInternallyComponent],
    imports:[JavaRoutingModule, CommonModule],
    providers:[]
})

export class JavaModule{
    constructor(){console.log("Java Module loaded")}
}