import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../app/models/product.model';
@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, MatIconModule, NgClass,NgIf],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
@Input() fullWithMode = true;

product: Product| undefined= {
  id : 1,
  title : "snickers",
  price : 150,
  category : "Shoes",
  description : "description",
  image : "https://via.placeholer.com/200",
}

@Output() addToCart = new EventEmitter()
onAddToCart(){
this.addToCart.emit(this.product)
}

}
