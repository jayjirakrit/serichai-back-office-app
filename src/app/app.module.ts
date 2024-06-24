import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { ProductComponent } from './component/product/product.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { ProductService } from './shared/service/product.service';
import { ProductItemService } from './shared/service/product-item.service';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    SidebarComponent,
    HeaderComponent,
    PaginationComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutesModule, NgbModule, FormsModule],
  providers: [ProductService, ProductItemService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
