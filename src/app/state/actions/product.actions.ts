import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';

export const loadProducts = createAction('[Product Component] Load all');
export const saveProducts = createAction('[Product Component] List received', props<{ products: Product[] }>());