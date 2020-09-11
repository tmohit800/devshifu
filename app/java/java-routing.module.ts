import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './java.component';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { JavaInstallationComponent } from './java-installation/java-installation.component';
import { HowJavaWorksInternallyComponent } from './how-java-works-internally/how-java-works-internally.component';

const routes: Routes = [
   {path:'about', component:JavaComponent},
   {path:'helloworld', component: HelloWorldComponent},
   {path:'javainstallation', component: JavaInstallationComponent},
   {path:'howjavaworksinternally', component: HowJavaWorksInternallyComponent},
   {path:'**', redirectTo:'about', pathMatch: 'full'}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes), CommonModule],    
    exports: [RouterModule]
})

export class JavaRoutingModule{

}