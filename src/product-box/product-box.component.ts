import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../app/models/product.model';
@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, MatIconModule, NgClass, NgIf],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
  @Input() fullWithMode = true;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
