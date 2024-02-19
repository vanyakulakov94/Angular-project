import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductPageComponent {
  title = 'name-project';
  // products: IProduct[] =[]
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
    ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap( () => this.loading = false)
    // )
    this.productsService.getAll().subscribe( () => {
      this.loading = false
    })
  }
}
