import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../state/state.interface';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { selectProducts } from '../../state/selectors/product.selectors';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products$: Observable<Product[]>

  constructor(private store: Store<GlobalState>) {
    this.products$ = store.select(selectProducts);
  }
}
