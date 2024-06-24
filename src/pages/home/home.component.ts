import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from '../components/products-header/products-header.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from '../../product-box/product-box.component';
import { Product } from '../../app/models/product.model';
import { CartService } from '../../app/services/cart.service';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
constructor(private cartService : CartService){}
  cols = 1;
  rowHeight = row_Height[this.cols];
  categorie: string | undefined;
  onColumnsUpdate(newCol: number): void {
    this.cols = newCol;
    this.rowHeight = row_Height[this.cols];
  }
  onShowCategories(newCategorie: string): void {
    this.categorie = newCategorie;
  }
  onAddcart(product : Product){
this.cartService.addToCart({
  product: product.image,
  name: product.title,
  price: product.price,
  quantity: 1,
  id: product.id,
})
  }
}


