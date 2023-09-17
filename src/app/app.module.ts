import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FindcarComponent } from './findcar/findcar.component';
import { BookLaterComponent } from './book-later/book-later.component';
import { PersonalComponent } from './book-later/personal/personal.component';
import { CompanyComponent } from './book-later/company/company.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookNowComponent,
    FindcarComponent,
    BookLaterComponent,
    PersonalComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
