import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductComponent } from './component/product/product.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'All Search' },
  },
  {
    path: 'product-item',
    component: ProductItemComponent,
    data: { title: 'View Product Item' },
  },
  {
    path: 'product-item/:id',
    component: ProductItemComponent,
    data: { title: 'View Product Item' },
  },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
