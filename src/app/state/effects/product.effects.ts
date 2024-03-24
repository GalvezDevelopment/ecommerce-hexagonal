import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductRepository } from '../../core/repositories/product.repository';
import { loadProducts, saveProducts } from '../actions/product.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductEffect {
    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(loadProducts),
        exhaustMap(() => this.productRepository.getProducts().pipe(
            map(products => saveProducts({ products }))
        ))
    ));

    constructor(private actions$: Actions, private productRepository: ProductRepository) { }
}