import { Component } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
products:any
constructor(private route:ActivatedRoute, private  apiService: ApiserviceService){}
ngOnInit() {
  const productsId = this.route.snapshot.paramMap.get('id');



  if(productsId){
    this.apiService.getProductsById(productsId).subscribe((data)=>{
      this.products = data;
    });
  }
}
}
