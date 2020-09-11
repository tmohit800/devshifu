import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavaModule } from './java/java.module';
import { AngularModule } from './angular/angular.module';


const routes: Routes = [
  {
    path:"home", component: HomeComponent
  },
  {
    path:"java", loadChildren: ()=>JavaModule
  },
  {
    path:"angular", loadChildren: ()=> AngularModule
  },
  {
    path:"**", redirectTo:"home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
