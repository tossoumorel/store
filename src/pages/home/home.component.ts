import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from '../components/products-header/products-header.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from '../../product-box/product-box.component';
import { Product } from '../../app/models/product.model';
import { CartService } from '../../app/services/cart.service';
import { Subscription } from 'rxjs';
import { StoreService } from '../../store.service';
import { NgFor } from '@angular/common';
const row_Height: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatGridListModule,
    ProductBoxComponent,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService, private store: StoreService) {}
  cols = 1;
  rowHeight = row_Height[this.cols];
  categorie: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  private productSubscription!: Subscription;

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productSubscription = this.store
      .getProduct(this.count, this.sort, this.categorie)
      .subscribe((_product) => {
        this.products = _product;
      });
  }

  onColumnsUpdate(newCol: number): void {
    this.cols = newCol;
    this.rowHeight = row_Height[this.cols];
  }
  onShowCategories(newCategorie: string){
    this.categorie = newCategorie;
    this.getAllProduct()
  }
  onAddcart(product: Product) :void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  onCoulumChange(newColum: number): void {
    this.count = newColum.toString();
    this.getAllProduct();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getAllProduct();
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription?.unsubscribe();
    }
  }
}
