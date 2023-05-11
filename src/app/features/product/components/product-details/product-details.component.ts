import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductStateService } from '../../services/product-state.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnDestroy {
  private route$: Subscription;
  private product$!: Subscription;

  public product!: Product;

  constructor(
    private productStateService: ProductStateService,
    private route: ActivatedRoute
  ) {
    this.route$ = this.route.params.subscribe((params) => {
      console.log(params);
      if (!params || !params['id']) {
        return;
      }
      const id = Number.parseInt(params['id']);
      this.getProductsFromApi(id);
    });
  }

  private getProductsFromApi(id: number) {
    this.product$ = this.productStateService.findProductById(id).subscribe(
      (product) => {
        if (!product) {
          return;
        }
        this.product = product;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.route$?.unsubscribe();
    this.product$?.unsubscribe();
  }
}
