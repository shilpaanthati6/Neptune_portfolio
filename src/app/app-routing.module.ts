import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './personal-page/personal-page.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "personal-page"},
  {path: "personal-page", component: PersonalPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
