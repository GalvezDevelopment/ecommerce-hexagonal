import { ProductDTO } from "../../infrastructure/dto/product.dto";
import { Product } from "../models/product.model";

export class ProductMapper {
    static fromApiToDomain({ id, title, imgUrl }: ProductDTO): Product {
        return { id, title, imgUrl };
    }
}