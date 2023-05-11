import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class ProductApiService extends ApiService {

  private readonly PRODUCT_ROUTE = 'product';
  private readonly PRODUCTS_ROUTE = 'products';

  constructor(private http: HttpClient) {
    super();
  }

  public getProducts(): Observable<Product[]> {
    const url = this.getApiUrl(this.PRODUCTS_ROUTE)
    return this.http.get<Product[]>(url);
  }

  public getProductById(id: number): Observable<Product> {
    if (!Number.isSafeInteger(id) || id <= 0) {
        throw new Error("Product id not valid");
    }
    const url = this.getApiUrl(`${this.PRODUCT_ROUTE}/${id}`)
    return this.http.get<Product>(url);
  }
}
