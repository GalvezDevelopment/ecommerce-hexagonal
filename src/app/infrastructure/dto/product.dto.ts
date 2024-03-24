export interface ProductDTO {
    id: string;
    title: string;
    imgUrl: string;
}

export type ProductId = ProductDTO['id'];