import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Product } from '../models/product';
import { ProductApiService } from './product-api.service';

@Injectable()
export class ProductStateService {
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private productApiService: ProductApiService) {
    this.productApiService.getProducts().subscribe((products) => {
      this.products$.next(products);
    });
  }

  public getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  public findProductById(id: number) {
    return this.productApiService.getProducts().pipe(map((products) => {
      if (!products || products.length < 0) {
        return;
      }
      return products.find((product) => product.id === id)
    }));
  }
}
