import { CommonModule } from '@angular/common'
import { InventoryComponent } from './inventory.component'
import { InventoryRoutingModule } from './inventory-routing.module'
import { MaterialModule } from '../material.module'
import { NgModule } from '@angular/core';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component'

@NgModule({
  declarations: [InventoryComponent, InventoryHomeComponent, StockEntryComponent, ProductsComponent, CategoriesComponent],
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
})
export class InventoryModule {}
