import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductApiService } from '../../services/product-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductStateService } from '../../services/product-state.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;
  @ViewChild(MatSort)
  public sort!: MatSort;

  public readonly displayedColumns: string[] = [
    'image',
    'title',
    'price',
    'actions',
  ];
  public dataSource = new MatTableDataSource<Product>([]);

  private products$: Subscription;
  private productsSort$!: Subscription;

  constructor(private productStateService: ProductStateService) {
    this.products$ = this.productStateService.getProducts().subscribe(
      (products) => {
        this.dataSource.data = products;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.productsSort$ = this.dataSource.sort?.sortChange?.subscribe(
      () => (this.paginator.pageIndex = 0)
    );
  }

  ngOnDestroy(): void {
    this.products$?.unsubscribe();
    this.productsSort$?.unsubscribe();
  }
}
