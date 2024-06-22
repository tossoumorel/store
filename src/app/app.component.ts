import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
import { HomeComponent } from '../pages/home/home.component';
import { cart } from './models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'store';
  cart: cart = { items: [] };
  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.cartServices.cart.subscribe((_cart)=>
    this.cart = _cart
    )
  }
}
