import { Injectable } from '@angular/core';
import { ProductRepository } from '../../core/repositories/product.repository';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../services/product/product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductRepositoryImpl extends ProductRepository {
    constructor(private productService: ProductService) {
        super();
    }

    override getProducts(): Observable<Product[]> {
        return this.productService.getProducts();
    }

}