import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { IAddItem } from 'src/app/shared/interfaces/IAddItem';
import { Item } from 'src/app/shared/models/Item';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isSubmitted = false;
  returnUrl = '';
  item:Item[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    let productObservable: Observable<Item[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      productObservable = this.itemService.getAllProductsBySearchTerm(params.searchTerm);
      else
      productObservable = itemService.getAllItem();
      console.log(productObservable);
      productObservable.subscribe((serverProduct) => {
        console.log(serverProduct)
        this.item = serverProduct;
      })

    })
   }

  ngOnInit(): void {
    this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  submit(form:NgForm){
    this.isSubmitted = true;
    if(form.invalid) return;

    const fv= form.value;
    const product :IAddItem = {
      name: fv.name,
      price: fv.price,
      image: fv.image,
      type: fv.type
    };

    this.itemService.addItem(product).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

}
