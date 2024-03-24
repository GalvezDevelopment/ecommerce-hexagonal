import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductId } from '../../dto/product.dto';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private URL = 'http://localhost:9000/cart';

    constructor(private http: HttpClient) { }

    addProduct(productId: ProductId): Observable<void> {
        return this.http.post<void>(this.URL, { productId });
    }

    removeProduct(productId: string): Observable<void> {
        return this.http.delete<void>(`${this.URL}/${productId}`);
    }

    checkout(): Observable<void> {
        return this.http.post<void>(this.URL, {});
    }
}