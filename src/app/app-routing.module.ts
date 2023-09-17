import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FindcarComponent} from './findcar/findcar.component';
import { BookLaterComponent} from './book-later/book-later.component';
import { PersonalComponent } from './book-later/personal/personal.component';
import { CompanyComponent } from './book-later/company/company.component';
const routes: Routes = [
{
  path:"" ,
  component: HomeComponent
},
{
  path:"bookNow" ,
  component: BookNowComponent
},
{
  path:"bookLater" ,
  children:[
    
    {
      path:"personal" ,
      component: PersonalComponent
    },
    {
      path:"company" ,
      component: CompanyComponent
    },
  ]
},
{
  path:"findCar" ,
  component: FindcarComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
