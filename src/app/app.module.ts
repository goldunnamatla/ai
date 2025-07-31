import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { CategoriesComponent } from './navitatingcomponents/categories/categories.component';
import { FurnitureComponent } from './navitatingcomponents/furniture/furniture.component';
import { InteriordesignComponent } from './navitatingcomponents/interiordesign/interiordesign.component';
import { PropertyComponent } from './navitatingcomponents/property/property.component';
import { HomeComponent } from './navitatingcomponents/home/home.component';
import { BannerComponent } from './navitatingcomponents/home/banner/banner.component';
import { CategoryComponent } from './navitatingcomponents/home/category/category.component';
import { WeekendComponent } from './navitatingcomponents/home/weekend/weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    FurnitureComponent,
    InteriordesignComponent,
    PropertyComponent,
    HomeComponent,
    BannerComponent,
    CategoryComponent,
    WeekendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
