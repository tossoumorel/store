import { Component, OnInit } from '@angular/core';
import { cart, cartItem } from '../../app/models/cart.model';
import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {
  MatColumnDef,
  MatRowDef,
  MatTableModule,
} from '@angular/material/table';
import { CartService } from '../../app/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    CommonModule,
    CurrencyPipe,
    MatColumnDef,
    MatRowDef,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cartServices: CartService) {}

  cartfilter = [];
  cart: cart = {
    items: [
      {
        product: 'https://via.placeholder.com/200',
        name: 'shoes',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/200',
        name: 'shoes',
        price: 150,
        quantity: 3,
        id: 2,
      },
    ],
  };

  datasource: Array<cartItem> = [];
  ngOnInit(): void {
    this.cartServices.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
    this.datasource = this.cart.items;
  }
  displaydeColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  getTotal(items: Array<cartItem>){
    return this.cartServices.getTotal(items);
  }

  clearAll(){
    this.cartServices.clearcart();
  }

  onClear(item : cartItem):void{
this.cartServices.removeCart(item)
  }

  onAddQuantity(item : cartItem):void{
this.cartServices.addToCart(item)
  }

  onRemoveQuantity(item : cartItem):void{
    this.cartServices.removeQuantity(item)
  }
}
