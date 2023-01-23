import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cart-item';
import { Item } from '../shared/models/Item';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(item: Item):void {
    let cartItem = this.cart.item
    .find(items => items.item.id === item.id);
    if(cartItem)
    return;

    this.cart.item.push(new CartItem(item));
    this.setCartToLocalStorage();
  }


  removeFromCart(productId: string): void{
    this.cart.item = this.cart.item
    .filter(item => item.item.id != productId);
    this.setCartToLocalStorage();
  }

  changeQuantity(productId: string, quantity: number) {
    let cartItem = this.cart.item
      .find(item => item.item.id === productId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.item.price;
    this.setCartToLocalStorage();

  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.item
    .reduce((prevSum, currentItem) => prevSum + currentItem.price,0)
    this.cart.totalCount = this.cart.item
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity,0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart' , cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson):new Cart();
 }
}
