import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateProduct!: FormGroup;
  isSubmitted = false;
  product: Item|null = null;
  returnUrl = 'update';
  isLoading= false
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private itemServices: ItemService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.activatedRoute.params.subscribe((params) => {
      this.itemServices.getItemByItemId(params.id).subscribe((serverItem) => {

        this.product = serverItem;
        });
        this.isLoading = false
      });
    }

  get fc() {
    return this.updateProduct.controls;
  }

  submit(form:NgForm) {

    const productId =  this.product?.id!

    this.itemServices.updateItemByItemId(form.value,productId).subscribe((_) => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  removeProduct(){
    this.activatedRoute.params.subscribe((params) => {
      this.itemServices.removeProductById(params.id).subscribe((_) => {
        this.router.navigateByUrl(this.returnUrl);
      });
    });
  }

}
