import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductComponent } from './component/product/product.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product-item', component: ProductItemComponent },
  { path: 'product-item/:id', component: ProductItemComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
