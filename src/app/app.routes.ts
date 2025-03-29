import { Routes } from '@angular/router';
import path from 'path';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductviewComponent } from './pages/productview/productview.component';

export const routes: Routes = [{
    path:"",
        component:HomeComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'contactus',
        component:ContactusComponent
},
{
    path:'productview/:id',
    component:ProductviewComponent
},


];
