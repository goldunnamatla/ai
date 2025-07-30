import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navitatingcomponents/home/home.component';
import { CategoriesComponent } from './navitatingcomponents/categories/categories.component';
import { FurnitureComponent } from './navitatingcomponents/furniture/furniture.component';
import { PropertyComponent } from './navitatingcomponents/property/property.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'interiordesign', component: FurnitureComponent },
  { path: 'property', component: PropertyComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
