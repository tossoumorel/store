import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { cart, cartItem } from '../../app/models/cart.model';
import { CartService } from '../../app/services/cart.service';

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
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private cartServices : CartService){}

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

  getTotals(items : Array<cartItem>) : number{
  return this.cartServices.getTotal(items)
  }
  
  clearCart(){
    this.cartServices.clearcart()
  }
}
