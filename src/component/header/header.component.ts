import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { cart } from '../../app/models/cart.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    CurrencyPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  _cart: cart = { items: [] };
  itemQuantity = 0;
  @Input()
  get cart() {
    return this._cart;
  }

  set cart(cart: cart) {
    this._cart = cart;
    this.itemQuantity = this._cart.items
      .map((item) => item.quantity)
      .reduce((acc, prev) => acc + prev, 0);
  }
}
