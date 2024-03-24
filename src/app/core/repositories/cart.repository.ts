import { Observable } from "rxjs";
import { Product } from "../models/product.model";

export abstract class CartRepository {
    abstract addProduct(product: Product): Observable<boolean>;
    abstract removeProduct(productId: Product): Observable<Product>;
    abstract checkout(): Observable<boolean>;
}