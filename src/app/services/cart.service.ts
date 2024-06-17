import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart, cartItem } from '../models/cart.model';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = new BehaviorSubject<cart>({items : []}) 
constructor(private sneckbar : MatSnackBar){}
  
  addToCart(item : cartItem){
    const items = [...this.cart.value.items]
    const ItemInCart = items.find((_item)=>_item.id === item.id)
    if (ItemInCart) {
      ItemInCart.quantity +=1
    }else{
     items.push(item)
    }
    this.cart.next({items})
    this.sneckbar.open('1 added item cart', 'ok' , {duration : 3000})
    console.log(this.cart.value)
    
  }
}
