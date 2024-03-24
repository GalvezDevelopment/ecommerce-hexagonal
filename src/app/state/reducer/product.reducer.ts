import { createReducer, on } from '@ngrx/store';
import { Product } from '../../core/models/product.model';
import { loadProducts } from '../actions/product.actions';

const initialState: Product[] = [];

export const productReducer = createReducer(
    initialState,
    on(loadProducts, state => state)
);