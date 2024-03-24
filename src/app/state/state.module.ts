import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './reducer/product.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ products: productReducer })
  ],
  exports: [StoreModule]
})
export class StateModule { }
