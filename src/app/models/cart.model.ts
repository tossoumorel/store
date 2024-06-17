export interface cart{
    items: Array<cartItem>
}



export interface cartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
