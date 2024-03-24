import { createSelector } from '@ngrx/store';
import { GlobalState } from '../state.interface';

const productFeature = (state: GlobalState) => state.products;
export const selectProducts = createSelector(productFeature, state => state);