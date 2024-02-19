import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent  implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: ModalService
    ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


   form = new FormGroup( {
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
   })

   get title() {
    return this.form.controls.title as FormControl
   }


   submit() {
    
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42, 
        count: 1
      }
    }).subscribe( () => {
      this.modalService.close()
    })
  }
}



