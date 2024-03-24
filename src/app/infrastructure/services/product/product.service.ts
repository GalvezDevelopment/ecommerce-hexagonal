import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private URL = 'https://localhost:9000/api/product';
    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.URL}`);
    }
}