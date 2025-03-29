import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  constructor(private http:HttpClient) //created object of http client
  { 

  }



getProducts()
{
  return this.http.get("https://fakestoreapi.com/products")
}

getProductsById(id:string)
{
  return this.http.get(`https://fakestoreapi.com/products/${id}`)
}


}