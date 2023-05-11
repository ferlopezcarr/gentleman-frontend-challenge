import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductApiService } from './services/product-api.service';
import { ProductStateService } from './services/product-state.service';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

@NgModule({
  declarations: [ProductTableComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    HttpClientModule,
    materialModules,
  ],
  providers: [ProductApiService, ProductStateService],
})
export class ProductModule {}
